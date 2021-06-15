import { shallow, mount } from 'enzyme';
import App from './App';
import Counter from './Counter';

describe("counter Testing", () => {

  let wrapper;
  beforeEach(() => {
    //  wrapper = mount(<App />) //use mount to use App
    wrapper = shallow(<Counter />)
    console.log(wrapper.debug())
  })

  test('render the title of counter', () => {

    // const wrapper = shallow(<App />)//no need because we called beforEach
    expect(wrapper.find('h3').text()).toContain('This is counter app')

    // const { getByText } = render(<App />);
    // const linkElement = getByText("This is counter app");
    // expect(linkElement).toBeInTheDocument();
  });


  test('render a button with text of `increment`', () => {
    // const wrapper = shallow(<App />)
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  })

  test('render the initial value of state in a div', () => {
    // const wrapper = shallow(<App />)
    expect(wrapper.find('#counter-value').text()).toBe("0")
  })

  test('render the clieck event of increment and incremnt counter value', () => {
    // const wrapper = shallow(<App />)
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find("#counter-value").text()).toBe("1")
    wrapper.find('#decrement-btn').simulate('click')
    expect(wrapper.find("#counter-value").text()).toBe("0")
  })
  
})

