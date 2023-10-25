import { shallow } from "enzyme"
import { GiffGridImagen } from "../../components/GiffGridImagen"

describe('análisis del componentes GiffGridImage', () => {

    const images = 'http://localhost/images.jpg'
    const title = 'imagenes'
    const wrapper = shallow(<GiffGridImagen title={title} images={images} />);

    it('el componente debe renderizarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    it('el párrafo debe contener un string correspondiete al "title"', () => {

        const p = wrapper.find('p')

        expect(p.text().trim()).toBe(title)

    })

    it('el elmento img debe tener como atributo un src = al url de la imbagen y un title = a title', ()=> {

        // const imgProps = wrapper.find('img').props();
        const imgSrc = wrapper.find('img').prop('src');
        const imgAlt = wrapper.find('img').prop('alt');

        expect(imgSrc).toBe(images);
        expect(imgAlt).toBe(title);

    })

    it('el div debe tener la clase card animate__animated animate__fadeInDown', () => {

        const div = wrapper.find('div')
        const classNameDelWrapper = div.prop('className');
        const classNameEsperada = 'card animate__animated'

        expect(classNameDelWrapper.includes(classNameEsperada)).toBe(true) 
    })

})

