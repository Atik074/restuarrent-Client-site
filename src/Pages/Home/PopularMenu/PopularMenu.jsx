
import SectionTitle from '../../../Components/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import MenuItem from '../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu] = useMenu() 
    const popular = menu.filter(item => item.category == 'popular')
   
    return (
        <div>
            <SectionTitle
               subheading={'---Cheack it out---'}
               heading={'FORM OUR MENU'}
            >
            </SectionTitle>

            <div className='grid  md:grid-cols-2 gap-4 my-12'>
                {
               popular.map(item => <MenuItem
                 key={item._id}
                 item = {item}
               ></MenuItem>)
                }
            </div>

        
            
        </div>
    );
};

export default PopularMenu;