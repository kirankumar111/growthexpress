import React from "react";
// import { Form } from "react-bootstrap";
// import LoaderButton from "../components/LoaderButton";
// import { Notify } from "bc-react-notifier";
// import DataSource from "../config/api";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  authenticate = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  authenticateSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    try {
      if (
        this.state.email === "kumar.kiran@docsapp.in" &&
        this.state.password === "docsapp"
      ) {
        this.props.userHasAuthenticated(true);
        this.props.history.push("/");
        // DataSource.getPatients()
        //   .done(function(data) {
        //     console.log(data);
        //   })
        //   .error(function(error) {
        //     Notify.error("Not able to connect backend", "toast", "error", 4000);
        //   });
      }
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    let page = null;
    let loginPage = (
      <div id="login" className="modal fade">
        <div className="modal-dialog modal-login">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Sign In</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div className="modal-body">
                    <form action="/examples/actions/confirmation.php" method="post">
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <input type="text" className="form-control" name="password" placeholder="Password" required="required"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Sign In</button>
                        </div>
                        <p className="hint-text"><a href="#">Forgot Password?</a></p>
                    </form>
                </div>
                <div className="modal-footer">Don't have an account? <a href="#">Create one</a></div>
            </div>
        </div>
    </div>
    );
    page = loginPage;
    return <div className="LoginDiv">{page}</div>;
  }
}

export default Login;
