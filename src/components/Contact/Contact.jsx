import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


const Contact = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const form = useRef()

    const onSubmit = data => {
        setLoading(true)
        console.log(data)

        emailjs.sendForm('service_y70cm1w', 'template_vn4snqk', form.current, 'k8QpfSMEYotKVDtjU')
            .then((result) => {
                reset()
                setLoading(false)
                Swal.fire(
                    'Message sent!',
                    'I will contact you soon. Thanks for your message😊',
                    'success'
                )
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact" className="pt-10 pb-20">
            <hr className="animate-bounce h-2 w-[80px] mx-auto mb-3 border-0 rounded-full bg-purple-600" />
            <h2 className="text-4xl font-bold text-center text-white mb-10">Contact Me</h2>

            <div className="flex flex-row-reverse gap-40 items-center justify-between">
                <div data-aos="fade-up-left" data-aos-delay="50" data-aos-duration="1200" className="rounded-lg w-1/2">
                    <div className="flex flex-col">
                        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-4 lg:gap-6">
                                <div className="grid">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                                        <input type="text" {...register("name")} name="name" id="name" className="py-3 px-4 block w-full rounded-md text-sm focus:ring-[#FEBC1E] focus:border-0 bg-[#252947] text-gray-300" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                                        <input type="email" {...register("email")} name="email" id="email" className="py-3 px-4 block w-full rounded-md text-sm focus:ring-[#FEBC1E] focus:border-0 bg-[#252947] text-gray-300" required />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">Phone Number</label>
                                        <input type="text" {...register("phone")} name="phone" id="phone" className="py-3 px-4 block w-full rounded-md text-sm focus:ring-[#FEBC1E] focus:border-0 bg-[#252947] text-gray-300" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                                    <textarea id="message" {...register("message")} name="message" rows="4" className="py-3 px-4 block w-full rounded-md text-sm focus:ring-[#FEBC1E] focus:border-transparent bg-[#252947] text-gray-300" required></textarea>
                                </div>
                            </div>

                            <div className="mt-6 grid">
                                <button type="submit" className="relative inline-flex items-center justify-center px-5 py-3 font-medium text-white bg-gray-800 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500">
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative flex gap-1 items-center">
                                        {
                                            loading ? <><span className="animate-spin"><FaSpinner size={18} /></span><span>Send Message</span></>
                                                : <><span>Send Message</span> <span><FaTelegramPlane size={18} /></span></>
                                        }
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div data-aos="fade-up-right" data-aos-delay="50" data-aos-duration="1200" className="w-1/2">
                    <div className="mb-7">
                        <h2 className="text-gray-100 mb-2 text-3xl font-bold">Let&apos;s work with me</h2>
                        <p className="text-gray-300">Let&apos;s join forces and bring your ideas to life! With collaboration and creativity, we can achieve something truly amazing. I&apos;m excited to work together and turn your vision into a reality. Don&apos;t wait any longer, Reach out now and let&apos;s get started!</p>
                    </div>
                    <div className="space-y-5">
                        <div className="flex gap-3 items-center p-4 bg-[#252947] text-gray-100 text-lg font-medium rounded-lg">
                            <FaPhone />
                            <span>+8801781940069</span>
                        </div>
                        <div className="flex gap-3 items-center p-4 bg-[#252947] text-gray-100 text-lg font-medium rounded-lg">
                            <FaEnvelope />
                            <span>ranasheikhsbd@gmail.com</span>
                        </div>
                        <div className="flex gap-3 items-center p-4 bg-[#252947] text-gray-100 text-lg font-medium rounded-lg">
                            <FaLocationDot />
                            <span>Sirajganj | Bangladesh</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;