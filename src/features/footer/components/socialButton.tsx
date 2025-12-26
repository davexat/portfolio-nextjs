import { SocialNetwork } from '../data/socialNetworks';
import Button from '../../shared/components/ui/Button';

const SocialButton = ({ social }: { social: SocialNetwork }) => {
    return (
        <Button href={social.url} target='_blank' rel='noopener noreferrer' className='flex p-3 border border-slate-500/20 rounded-full bg-slate-950 hover:bg-slate-900 transitions cursor-pointer'>
            {social.icon}
        </Button>
    );
};

export default SocialButton;