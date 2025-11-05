import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

type FormValues = { name: string; email: string; subject?: string; message: string }

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>()

  const onSubmit = async (values: FormValues) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    try {
      await emailjs.send(serviceId, templateId, values as any, { publicKey })
      toast.success('Message sent successfully!')
      reset()
    } catch (e) {
      toast.error('Failed to send message.')
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-3xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-[var(--text-secondary)]">I'm currently open to full-time opportunities and freelance projects</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <div>
              <input aria-label="Name" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]" {...register('name', { required: true })} />
              {errors.name && <p className="text-xs text-red-400 mt-1">Name is required</p>}
            </div>
            <div>
              <input aria-label="Email" placeholder="Email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]" {...register('email', { required: true })} />
              {errors.email && <p className="text-xs text-red-400 mt-1">Email is required</p>}
            </div>
            <div>
              <input aria-label="Subject" placeholder="Subject (optional)" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]" {...register('subject')} />
            </div>
            <div>
              <textarea aria-label="Message" placeholder="Message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]" {...register('message', { required: true })} />
              {errors.message && <p className="text-xs text-red-400 mt-1">Message is required</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-3 rounded-xl bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] border border-[var(--accent-blue)]/30 hover:bg-[var(--accent-blue)]/30 disabled:opacity-60">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold mb-4">Direct Contact</h3>
          <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
            <li>Email: <a className="text-white" href="mailto:keshavchoudhary782@gmail.com">keshavchoudhary782@gmail.com</a></li>
            <li>Phone: <a className="text-white" href="tel:+917079547668">+91 7079547668</a></li>
            <li>Location: Ranchi, Jharkhand</li>
            <li>GitHub: <a className="text-white" target="_blank" rel="noreferrer" href="https://github.com/keshavchoudhary7">github.com/keshavchoudhary7</a></li>
            <li>LinkedIn: <a className="text-white" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/keshav-kumar-choudhary-6a7a98221/">LinkedIn Profile</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}


