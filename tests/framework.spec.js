import { expect } from 'chai';
import { mount } from 'enzyme';
import React from 'react';
import Row from './../client/components/framework/row.jsx';

describe('<Row />', () => {

  const rowSelector = "div.row";
  it('Renders properly', () => {
    const wrapper = mount(<Row />);
    expect(wrapper.find(rowSelector)).to.have.length(1);
  });

  it('Renders with 1 child', () => {
    const wrapper = mount(<Row> <p></p></Row>);
    var pTag = wrapper.find(rowSelector).find("p");
    expect(pTag).to.have.length(1);
  });

  it('Renders with multiple children', () => {
    const wrapper = mount(<Row> <p></p><p></p> </Row>);
    var pTag = wrapper.find(rowSelector).find("p");
    expect(pTag).to.have.length(2);
  });
});

