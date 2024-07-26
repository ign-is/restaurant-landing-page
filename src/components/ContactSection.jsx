import { CONTACT } from "../constants";

const ContactSection = () => {
    return (
        <section className="container mx-auto py-16" id="contact">
            <h2 className="mb-8 text-center text-3xl lg:text-4xl">Contact Us</h2>
            <div className="text-neutral-400">
                {CONTACT.map((detail) => (
                    <p key={detail.key} className="my-20 border-b-2 border-dotted border-neutral-700 pb-12 text-center text-2xl tracking-tighter lg:text-3xl">
                        {detail.value}
                    </p>
                ))}
            </div>
        </section>
    )
}

export default ContactSection;