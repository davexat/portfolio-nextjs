"use client";
import Button from '../../shared/components/ui/Button';

const ContactUI = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget
        const formData = new FormData(e.currentTarget);

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            hp: formData.get('hp'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending contact form:', error);
            alert('Error sending message. Please try again later.');
        }
    };

    return (
        <section id='contact' className='layout-section bg-section color-text'>
            <h2 className='text-title gradient-title'>Contact Me</h2>
            {/* Content */}
            <span className='max-w-7xl lg:max-w-5xl w-full flex flex-col gap-8 lg:flex-row justify-center'>
                <span className='flex flex-col gap-4 w-full'>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                        <label className='flex flex-col gap-2'>
                            <input
                                type="text"
                                name="hp"
                                autoComplete="off"
                                style={{ display: "none" }}
                            />
                            <span className='gradient-title text-xl grow-0'>Name:</span>
                            <input
                                type="text"
                                name="name"
                                className='border border-button border-button-hover bg-button color-text p-3 rounded-md transitions style-input'
                                placeholder="Your name"
                            />
                        </label>
                        <label className='flex flex-col gap-2'>
                            <span className='gradient-title text-xl'>Email:</span>
                            <input
                                type="email"
                                name="email"
                                className='border border-button border-button-hover bg-button color-text p-3 rounded-md transitions style-input'
                                placeholder="your.email@example.com"
                            />
                        </label>
                        <label className='flex flex-col gap-2'>
                            <span className='gradient-title text-xl'>Subject:</span>
                            <input
                                type="text"
                                name="subject"
                                className='border border-button border-button-hover bg-button color-text p-3 rounded-md transitions style-input'
                                placeholder="Subject of your message"
                            />
                        </label>
                        <label className='flex flex-col gap-2'>
                            <span className='gradient-title text-xl'>Message:</span>
                            <textarea
                                name="message"
                                className='border border-button border-button-hover bg-button color-text p-3 rounded-md transitions style-input min-h-[120px] resize-none'
                                placeholder="Write your message here..."
                            />
                        </label>
                        <Button type="submit" className='mt-2 layout-button border border-button border-button-hover bg-button-contrast bg-button-contrast-hover p-2 text-white transitions'>Send</Button>
                    </form>
                </span>
                <span className='flex flex-col gap-4 w-full'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352.4064209291404!2d-79.96815521872514!3d-2.1446767941770593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d7303bb0133cd%3A0x66c18bd9810f31cb!2sFacultad%20de%20Ingenier%C3%ADa%20en%20Electricidad%20y%20Computaci%C3%B3n%20FIEC%20-%20ESPOL!5e0!3m2!1ses!2sec!4v1763161812182!5m2!1ses!2sec"
                        className='w-full h-full border border-button border-button-hover rounded-md min-h-[300px] md:min-h-[400px]'
                        allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <p className='opacity-80 text-center'>If you want to meet me in person, we can schedule a meeting from Monday to Thursday at the Facultad de Ingeniería en Electricidad y Computación (FIEC) - ESPOL. Feel free to reach out to coordinate a time!
                    </p>
                </span>
            </span>
        </section>
    )
}

export default ContactUI;