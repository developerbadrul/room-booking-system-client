import { Link } from "react-router-dom";
import Container from "./Container";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";

const Footer = () => {
    return (
        <footer className="bg-slate-50">
            <Container>
                <div className="py-16">
                    <div className="flex items-center justify-center">
                        <Logo className="mx-auto h-10 w-auto" />
                    </div>
                    <nav className="mt-10 text-sm" aria-label="quick links">
                        <div className="-my-1 flex justify-center gap-x-6">
                            <NavLink href="#features">Features</NavLink>
                            <NavLink href="#testimonials">Testimonials</NavLink>
                            <NavLink href="#pricing">Pricing</NavLink>
                        </div>
                    </nav>
                </div>

                <div className="grid grid-cols-1 gap-10 border-t border-slate-400/10 py-10 sm:grid-cols-3">
                    {/* Contact Information */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="text-lg font-semibold text-slate-700">Contact Information</h4>
                        <p className="mt-2 text-sm text-slate-500">Email: info@keycommerce.com</p>
                        <p className="text-sm text-slate-500">Phone: +1 (555) 123-4567</p>
                        <p className="text-sm text-slate-500">Office: 123 Mechanical St, Keyboard City, CA</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex flex-col items-center sm:items-center">
                        <h4 className="text-lg font-semibold text-slate-700">Follow Us</h4>
                        <div className="mt-2 flex space-x-4">
                            <Link to="#" aria-label="KeyCommerce on X">
                                <svg
                                    className="h-6 w-6 fill-slate-500 hover:fill-slate-700"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                >
                                    {/* Add SVG path for X (Twitter) */}
                                    <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
                                </svg>
                            </Link>
                            <Link to="#" aria-label="KeyCommerce on GitHub">
                                <svg
                                    className="h-6 w-6 fill-slate-500 hover:fill-slate-700"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                >
                                    {/* Add SVG path for GitHub */}
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                                </svg>
                            </Link>
                            <Link to="#" aria-label="KeyCommerce on Facebook">
                                <svg
                                    className="h-6 w-6 fill-slate-500 hover:fill-slate-700"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                >
                                    {/* Add SVG path for Facebook */}
                                    <path d="M22 12.073C22 6.505 17.523 2 12 2S2 6.505 2 12.073c0 5.005 3.657 9.162 8.438 9.868v-6.985H7.898v-2.883h2.54V9.843c0-2.513 1.492-3.895 3.777-3.895 1.094 0 2.238.195 2.238.195v2.466h-1.26c-1.242 0-1.63.771-1.63 1.563v1.884h2.773l-.443 2.883h-2.33v6.986C18.343 21.235 22 17.078 22 12.073z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Additional Links */}
                    <div className="flex flex-col items-center sm:items-end">
                        <h4 className="text-lg font-semibold text-slate-700">Additional Links</h4>
                        <Link to="/privacy-policy" className="mt-2 text-sm text-slate-500">
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-service" className="text-sm text-slate-500">
                            Terms of Service
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-center border-t border-slate-400/10 py-6 sm:flex-row-reverse sm:justify-between">
                    <p className="mt-6 text-sm text-slate-500 sm:mt-0">
                        Copyright &copy; {new Date().getFullYear()} KeyCommerce. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
