import styles from './SobreMin.module.css';
import PostModelo from "Componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
  return (

      <PostModelo 
          fotoCapa={fotoCapa} 
          titulo='Sobre mim'
          >

          <h3 className={styles.subtitulo}>
            Olá, eu sou Jonata!
          </h3>

          <img 
            src={fotoSobreMim} 
            alt='foto de jonata'
            className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet pulvinar habitant nec aptent risus sagittis duis eu nisi aptent hac potenti ut odio euismod eget elit sapien consectetur senectus condimentum fringilla mauris dolor placerat sapien pellentesque sapien ultricies nec nisl pulvinar tristique diam vehicula velit curabitur ullamcorper donec sodales tempus erat semper netus rhoncus.
            </p>
            <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet habitant nulla amet eros aliquam dictumst curabitur cursus lobortis purus dui sit tempor netus urna congue sodales mi viverra mi pretium eros laoreet non gravida volutpat duis odio feugiat odio gravida ut sapien sollicitudin rhoncus laoreet quam auctor massa imperdiet.
            </p>
            <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet taciti fringilla porttitor senectus pretium sem euismod quis ultrices aliquam tempus nullam diam massa eros condimentum diam habitant massa pharetra nulla sapien cubilia sit fusce erat rutrum lobortis habitant quam tincidunt hac ut amet metus.
            </p>
            <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet vivamus fringilla sapien taciti ultrices feugiat vivamus turpis curabitur neque turpis dapibus erat etiam scelerisque urna tellus fringilla netus euismod taciti viverra arcu aenean sodales phasellus eu amet potenti sed.
            </p>
            <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet eget torquent nisl mauris risus augue ultrices bibendum sed dictum mi nisl eleifend luctus varius iaculis placerat mollis volutpat a eros imperdiet quis lacus nam.
            </p>
                            
      </PostModelo>

  )
}
