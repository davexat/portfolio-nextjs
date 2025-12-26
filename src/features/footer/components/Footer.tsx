import SocialButton from './socialButton';
import { socialNetworks } from '../data/socialNetworks';

const FooterUI = () => {
    return (
        <footer className="w-full py-4 text-center text-sm text-slate-100 flex-center flex-col gap-4 bg-[#000008] border-t border-slate-700/20">
            <div className='flex gap-2 justify-center'>
                {socialNetworks.map((social) => (
                    <SocialButton key={social.name} social={social} />
                ))}
            </div>
            <p className='info-text'> © {new Date().getFullYear()} David Sandoval. All rights reserved. </p>
        </footer>
    )
};

export default FooterUI;