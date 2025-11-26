import { SocialNetwork } from '../data/socialNetworks';
import Button from '../../shared/components/ui/Button';

const SocialButton = ({ social } : { social: SocialNetwork }) => {
    return (
        <Button href={social.url} target='_blank' rel='noopener noreferrer' className='flex p-3 border-2 border-slate-400/20 rounded-full bg-zinc-900 hover:bg-slate-800 transitions cursor-pointer'>
            {social.icon}
        </Button>
    );
};

export default SocialButton;