"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { allServices } from "@/data/services";

type Booking = {
  id: string;
  name: string;
  phone: string;
  email: string;
  gotra: string;
  puja: string;
  preferredDate: string | null;
  city: string;
  message: string;
  status: string;
  createdAt: string;
};

type Data = {
  items: Booking[];
  counts: Record<string, number>;
};

const statusOptions = [
  ["pending", "लंबित"],
  ["confirmed", "पुष्ट"],
  ["completed", "पूर्ण"],
  ["rejected", "अस्वीकृत"],
] as const;

const countLabels: Record<string, string> = {
  total: "कुल बुकिंग",
  pending: "लंबित",
  confirmed: "पुष्ट",
  completed: "पूर्ण",
  rejected: "अस्वीकृत",
};

async function readJson(response: Response) {
  try {
    return (await response.json()) as Record<string, unknown>;
  } catch {
    return {};
  }
}

export default function AdminDashboard() {
  const [authState, setAuthState] = useState<"checking" | "login" | "authenticated">("checking");
  const [data, setData] = useState<Data | null>(null);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [pujaFilter, setPujaFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [error, setError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);

    try {
      const response = await fetch("/api/admin/bookings", {
        cache: "no-store",
      });
      const body = await readJson(response);

      if (response.status === 401) {
        setAuthState("login");
        setData(null);
        return;
      }

      if (!response.ok) {
        throw new Error(typeof body.error === "string" ? body.error : "बुकिंग लोड नहीं हुई");
      }

      setData(body as Data);
      setAuthState("authenticated");
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "अनुरोध विफल");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      void load();
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    setLoginError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: String(formData.get("username") || ""),
          password: String(formData.get("password") || ""),
        }),
      });
      const body = await readJson(response);

      if (!response.ok) {
        throw new Error(typeof body.error === "string" ? body.error : "लॉगिन नहीं हो सका");
      }

      form.reset();
      setAuthState("authenticated");
      await load();
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "लॉगिन नहीं हो सका");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setData(null);
    setAuthState("login");
  }

  async function update(id: string, status: string) {
    const response = await fetch("/api/admin/bookings", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });

    if (response.status === 401) {
      setAuthState("login");
      setData(null);
      return;
    }

    if (!response.ok) {
      setError("स्थिति अपडेट नहीं हुई");
      return;
    }

    await load();
  }

  const items = useMemo(
    () =>
      data?.items.filter((booking) => {
        const searchText = `${booking.name} ${booking.phone} ${booking.puja} ${booking.city}`.toLowerCase();
        const matchesQuery = searchText.includes(query.toLowerCase());
        const matchesStatus = !statusFilter || booking.status === statusFilter;
        const matchesPuja = !pujaFilter || booking.puja === pujaFilter;
        const matchesDate =
          !dateFilter || (booking.createdAt && new Date(booking.createdAt) >= new Date(`${dateFilter}T00:00:00`));

        return matchesQuery && matchesStatus && matchesPuja && matchesDate;
      }) ?? [],
    [data, dateFilter, pujaFilter, query, statusFilter],
  );

  if (authState === "checking") {
    return (
      <section className="section">
        <div className="container">
          <h1>Admin</h1>
          <p className="message" role="status">
            बुकिंग लोड हो रही है...
          </p>
        </div>
      </section>
    );
  }

  if (authState === "login") {
    return (
      <section className="section">
        <div className="container prose">
          <h1>एडमिन लॉगिन</h1>
          <p>.env में सेट एडमिन आईडी और पासवर्ड से लॉगिन करें।</p>

          <form className="card form-grid" onSubmit={login}>
            <label className="field full">
              एडमिन आईडी
              <input name="username" autoComplete="username" required />
            </label>

            <label className="field full">
              पासवर्ड
              <input name="password" type="password" autoComplete="current-password" required />
            </label>

            {loginError && (
              <p className="message field full" role="status">
                {loginError}
              </p>
            )}

            <button className="button field full" disabled={loading}>
              {loading ? "लॉगिन हो रहा है..." : "लॉगिन"}
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading compact">
          <div>
            <span className="eyebrow">Admin</span>
            <h1>बुकिंग डैशबोर्ड</h1>
          </div>

          <div className="hero-actions">
            <button className="button secondary" onClick={() => void load()} disabled={loading}>
              {loading ? "रीफ्रेश हो रहा है..." : "रीफ्रेश"}
            </button>
            <button className="button" onClick={() => void logout()}>
              लॉगआउट
            </button>
          </div>
        </div>

        {error && (
          <p className="message" role="status">
            {error}
          </p>
        )}

        {data && (
          <>
            <div className="grid service-grid">
              {Object.entries(data.counts).map(([key, value]) => (
                <article className="card" key={key}>
                  <span>{countLabels[key] ?? key}</span>
                  <h2>{value}</h2>
                </article>
              ))}
            </div>

            <div className="hero-actions">
              <input
                className="admin-search"
                aria-label="बुकिंग खोजें"
                placeholder="नाम, फोन, सेवा या शहर खोजें"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />

              <select
                className="admin-search"
                aria-label="स्थिति से छाँटें"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option value="">सभी स्थितियाँ</option>
                {statusOptions.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>

              <select
                className="admin-search"
                aria-label="सेवा से छाँटें"
                value={pujaFilter}
                onChange={(event) => setPujaFilter(event.target.value)}
              >
                <option value="">सभी सेवाएँ</option>
                {allServices.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>

              <label className="field">
                इस तारीख के बाद प्राप्त
                <input
                  className="admin-search"
                  type="date"
                  value={dateFilter}
                  onChange={(event) => setDateFilter(event.target.value)}
                />
              </label>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>नाम / फोन</th>
                    <th>सेवा</th>
                    <th>पसंदीदा तारीख</th>
                    <th>स्थिति</th>
                    <th>बुकिंग समय</th>
                    <th>विवरण</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((booking) => (
                    <tr key={booking.id}>
                      <td>
                        {booking.name}
                        <br />
                        <a href={`tel:${booking.phone}`}>{booking.phone}</a>
                      </td>
                      <td>{allServices.find((service) => service.slug === booking.puja)?.title ?? booking.puja}</td>
                      <td>{booking.preferredDate || "—"}</td>
                      <td>
                        <select
                          value={booking.status}
                          onChange={(event) => void update(booking.id, event.target.value)}
                          aria-label={`${booking.name} की स्थिति`}
                        >
                          {statusOptions.map(([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>{new Date(booking.createdAt).toLocaleDateString("hi-IN")}</td>
                      <td>
                        <details>
                          <summary>देखें</summary>
                          <p>
                            ईमेल: {booking.email || "—"}
                            <br />
                            गोत्र: {booking.gotra || "—"}
                            <br />
                            शहर: {booking.city || "—"}
                            <br />
                            विशेष जानकारी: {booking.message || "—"}
                          </p>
                        </details>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {items.length === 0 && <p>इस चयन के लिए बुकिंग नहीं मिली।</p>}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
