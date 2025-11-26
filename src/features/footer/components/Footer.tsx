import SocialButton from './socialButton';
import { socialNetworks } from '../data/socialNetworks';

const FooterUI = () => {
    return (
        <footer className="w-full py-4 text-center text-sm text-neutral-100 flex flex-col gap-4 bg-zinc-900 items-center justify-center border-t-2 border-zinc-400/20">
            <div className='flex gap-2 justify-center'>
                {socialNetworks.map((social) => (
                    <SocialButton key={social.name} social={social} />
                ))}
            </div>
            <p className='text-lg'> © {new Date().getFullYear()} David Sandoval. All rights reserved. </p>
        </footer>
    )
};

export default FooterUI;