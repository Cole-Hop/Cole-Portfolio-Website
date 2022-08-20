import './index.scss'
import Me from '../../assets/images/DSC_0210.jpg'

const AboutMe = () => {
    return(
        

        <div className="me-page">
        <h1> About Me </h1>
            <div className="pic">
            <img className="cat" src={Me} alt="Picture Of Me :)"/>
            </div>
            <div className="text">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id tempor velit, nec tincidunt tellus. Integer lobortis est vestibulum, iaculis sapien eget, iaculis nunc. Nam a tellus ac sapien commodo congue et ac lorem. Curabitur risus risus, lobortis id nisl a, aliquet ultrices metus. Pellentesque vel ipsum id neque dapibus hendrerit. Mauris vel quam nulla. Cras congue auctor ipsum, quis volutpat nisl auctor nec. Nulla bibendum ultrices nibh at vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut pretium gravida consectetur. In mauris nisi, dapibus ut risus at, pharetra sollicitudin neque. Donec vestibulum lectus arcu, ut finibus lacus dictum consectetur. Etiam id accumsan nunc. Duis velit tortor, accumsan id enim vitae, efficitur feugiat ex. Nullam sollicitudin non mauris eu dapibus. Integer interdum, diam facilisis aliquam fermentum, mi velit blandit mauris, et accumsan nunc arcu eu lectus. Aenean dignissim, justo sit amet suscipit varius, ante sem faucibus nibh, nec faucibus magna urna eu arcu. Aliquam erat volutpat. Vestibulum tincidunt lectus pretium augue auctor laoreet. Curabitur sed molestie augue. Nunc pellentesque rhoncus placerat. Nulla accumsan sem sed sollicitudin elementum. Ut eu erat efficitur, euismod dui non, porttitor ante.
            Donec a maximus risus, in sodales libero. In placerat eros id nisl convallis placerat. Nunc vitae euismod eros. In nibh ligula, ornare ut maximus eget, dictum in augue. Nullam in tellus placerat, rutrum leo hendrerit, congue nisi. Donec a dui eu sem sodales pharetra. Mauris non est nisl. Aliquam convallis pharetra nunc, sit amet pretium odio sollicitudin eu. Fusce suscipit ut justo ut rutrum. Etiam odio metus, feugiat a neque rhoncus, eleifend posuere risus.
            Etiam vehicula iaculis risus ut pharetra. Integer tincidunt molestie leo, at sagittis velit feugiat sit amet. Proin dictum felis turpis, interdum commodo ligula lacinia ac. Donec molestie nulla libero, ac molestie dolor mollis nec. Aenean ut tellus lobortis, ornare ex in, ornare ex. Aliquam ac mauris at metus aliquet condimentum eleifend vel nunc. Integer in augue eu nunc pulvinar posuere at nec diam. Fusce pharetra mi non congue auctor. Curabitur gravida non dolor sit amet rhoncus. Duis lacus ex, sollicitudin id scelerisque in, blandit at tellus. Aenean quis lectus interdum, gravida nunc commodo, sodales felis. In gravida dui a magna molestie, rutrum scelerisque velit rutrum. Etiam posuere ex sem, ac venenatis metus eleifend non.
            </p>
            </div>
        </div>
    )
}

export default AboutMe