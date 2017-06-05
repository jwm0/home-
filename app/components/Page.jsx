var React = require('react');

var Page = () => {
  return(
    <div>
      <div className="page1">
        <h1><span className="my-object">Your home</span><span style={{'color':'#191414'}}><b>+</b></span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat lorem, auctor venenatis fringilla sed, maximus in nisl. Quisque molestie scelerisque accumsan.</p>
        <p>Donec bibendum cursus placerat.</p>
      </div>
      <div className="page2">
        <div className="product">
          <h2>our product</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus neque vel turpis blandit, quis pharetra lorem ultricies. Sed aliquam nulla congue lacus mollis, nec cursus ligula semper. Nunc ut tortor vehicula quam fermentum placerat. Nullam sapien lorem, volutpat at convallis a, semper maximus risus. Morbi sed justo ut libero placerat viverra sit amet ut tortor. Pellentesque eleifend quam a est ornare, vel aliquam neque euismod. Duis et maximus justo, at tristique sapien. .</p>
          <p>Sed maximus imperdiet erat, vel pharetra mauris tincidunt nec. Aliquam diam dolor, tempus ac tincidunt sit amet, posuere et mi. Curabitur nec dictum ipsum. Integer volutpat tincidunt ex, maximus tristique augue pretium a. Morbi lobortis nunc purus, sit amet condimentum nulla commodo vel. Mauris finibus sapien metus, quis feugiat ante venenatis quis. Proin luctus pellentesque lorem, id vestibulum libero efficitur id. Curabitur.</p>
          <p>
            <img src={require('../img/iphone.png')}/>
          </p>
        </div>
      </div>
      <div id="page3">
        <div id="about">
          <h1>about <span style={{color:'#191414'}}>us</span></h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat lorem, auctor venenatis fringilla sed, maximus in nisl. Quisque molestie scelerisque accumsan.
          <p>Donec bibendum cursus placerat.Cras iaculis semper consectetur. Nunc mattis dictum dapibus. Nullam eu sagittis est. Cras vitae odio sit amet nunc molestie pellentesque a vel leo. Proin ut tellus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
        </div>
      </div>
    </div>
  )
};

module.exports = Page;
