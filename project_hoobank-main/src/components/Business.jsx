import styles, {layout} from "../style"
import { features } from "../constants";
import  Button from './Button';

const Business = () =>(
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quod nulla explicabo porro. Id quisquam illum numquam ex consequatur eveniet?</p>

        <Button styles="mt-10"/>
      </div>
    </section>
)

export default Business