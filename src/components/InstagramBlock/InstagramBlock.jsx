import { Containter } from '../Container/Containter';
import { SectionTop } from '../UI/SectionTop/SectionTop';
import styles from './InstagramBlock.module.scss';

import post_01 from '../../assets/instagramPosts/Instagram Post.jpg';
import post_02 from '../../assets/instagramPosts/Instagram Post-1.jpg';
import post_03 from '../../assets/instagramPosts/Instagram Post-2.jpg';
import post_04 from '../../assets/instagramPosts/Instagram Post-3.jpg';
import post_05 from '../../assets/instagramPosts/Instagram Post-4.jpg';
import post_06 from '../../assets/instagramPosts/Instagram Post-5.jpg';

const instagrama = 'https://www.instagram.com/';

export const InstagramBlock = () => {
  return (
    <Containter>
      <SectionTop title='Follow us on Instagram'/>
      <ul className={styles.list}>
        <li className={styles.item}><a target='blank' href={instagrama} className='ibg'><img src={post_01} alt="instagram" /></a></li>
        <li className={styles.item}><a target='blank' href={instagrama} className='ibg'><img src={post_02} alt="instagram" /></a></li>
        <li className={styles.item}><a target='blank' href={instagrama} className='ibg'><img src={post_03} alt="instagram" /></a></li>
        <li className={styles.item}><a target='blank' href={instagrama} className='ibg'><img src={post_04} alt="instagram" /></a></li>
        <li className={styles.item}><a target='blank' href={instagrama} className='ibg'><img src={post_05} alt="instagram" /></a></li>
        <li className={styles.item}><a target='blank' href={instagrama} className='ibg'><img src={post_06} alt="instagram" /></a></li>
      </ul>
    </Containter>
  )
}
