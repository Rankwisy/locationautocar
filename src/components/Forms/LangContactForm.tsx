'use client';

import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';

// Same Netlify form ("contact") and field names as the French EnhancedContactForm.
const EMPTY = { name: '', email: '', phone: '', service: '', date: '', passengers: '', destination: '', message: '' };
const SERVICE_VALUES = ['transfert', 'excursion', 'business', 'disposition'] as const;

export interface FormStrings {
  name: string;
  email: string;
  phone: string;
  service: string;
  servicePlaceholder: string;
  services: Record<(typeof SERVICE_VALUES)[number], string>;
  date: string;
  passengers: string;
  destination: string;
  destinationPlaceholder: string;
  message: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successText: string;
  errorTitle: string;
  errorText: string;
  or: string;
  required: string;
}

const input = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent';
const label = 'block text-sm font-medium text-gray-700 mb-2';

export default function LangContactForm({ t }: { t: FormStrings }) {
  const [data, setData] = useState(EMPTY);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...data }).toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setData(EMPTY);
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={label}>{t.name} *</label>
          <input id="name" name="name" required value={data.name} onChange={onChange} className={input} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className={label}>{t.email} *</label>
          <input id="email" name="email" type="email" required value={data.email} onChange={onChange} className={input} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>{t.phone} *</label>
          <input id="phone" name="phone" type="tel" required value={data.phone} onChange={onChange} className={input} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="service" className={label}>{t.service} *</label>
          <select id="service" name="service" required value={data.service} onChange={onChange} className={input}>
            <option value="">{t.servicePlaceholder}</option>
            {SERVICE_VALUES.map((v) => (
              <option key={v} value={v}>{t.services[v]}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className={label}>{t.date}</label>
          <input id="date" name="date" type="date" value={data.date} onChange={onChange} className={input} />
        </div>
        <div>
          <label htmlFor="passengers" className={label}>{t.passengers}</label>
          <input id="passengers" name="passengers" type="number" min={1} value={data.passengers} onChange={onChange} className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="destination" className={label}>{t.destination}</label>
        <input id="destination" name="destination" value={data.destination} onChange={onChange} className={input} placeholder={t.destinationPlaceholder} />
      </div>
      <div>
        <label htmlFor="message" className={label}>{t.message} *</label>
        <textarea id="message" name="message" required rows={5} value={data.message} onChange={onChange} className={input} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2"
      >
        {isSubmitting ? <Loader className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Send className="w-5 h-5" aria-hidden="true" />}
        {isSubmitting ? t.submitting : t.submit}
      </button>

      <div aria-live="polite">
        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4">
            <p className="font-semibold">{t.successTitle}</p>
            <p className="text-sm text-green-700">{t.successText}</p>
          </div>
        )}
        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
            <p className="font-semibold">{t.errorTitle}</p>
            <p className="text-sm">
              {t.errorText}{' '}
              <a href="tel:+3225800325" className="underline">+32 2 580 03 25</a> {t.or}{' '}
              <a href="mailto:info@locationautocar.be" className="underline">info@locationautocar.be</a>.
            </p>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-500 text-center">{t.required}</p>
    </form>
  );
}
