var React = require('react');
var Formation = require('react-formation');


// var Heo = React.createClass({
//     render: function() {
//       return (
//           <div>
//             <h1>
//               hh
//             </h1>
//           </div>
//       );
//     }
// });

var Form = Formation.CreateForm({

  getSchema: function () {
    return {
      name: {required: true}
      email: {type: 'email'}
    };
  },

  onSuccess: function (data) {
    console.log(data);
  },

  render: function () {
    return (<form>

      <label>Name</label>
      <input type="text" valueLink={this.linkField('name')} />

      <label>Email</label>
      <input type="text" valueLink={this.linkField('email')} />

      <button onClick={this.submitForm}>Submit</button>

    </form>);
  }

});


module.exports = Form;
