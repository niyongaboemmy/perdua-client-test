import React, { Component } from "react";
import {
  AiFillEye,
  AiOutlineEyeInvisible,
  AiOutlineLoading3Quarters,
  AiOutlineLogin,
} from "react-icons/ai";
import { Alert } from "../../components/Alert/Alert";
import Container from "../../components/Container/Container";
import PageContainer from "../../components/PageContainer/PageContainer";

interface AdminLoginProps {}
interface AdminLoginState {
  username: string;
  password: string;
  error: {
    target: "username" | "password" | "main" | null;
    msg: string;
  };
  loading: boolean;
  passwordDisplay: boolean;
}

class AdminLogin extends Component<AdminLoginProps, AdminLoginState> {
  constructor(props: AdminLoginProps) {
    super(props);

    this.state = {
      loading: false,
      error: {
        target: null,
        msg: "",
      },
      password: "",
      passwordDisplay: false,
      username: "",
    };
  }
  render() {
    return (
      <PageContainer page_title="Admin Authentication | Perdua Publishers">
        <div className="pt-24">
          <Container>
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-3 lg:col-span-4"></div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="bg-white rounded-md p-3 lg:p-5">
                  <div className="text-xl font-bold">Authentication</div>
                  <div>
                    <form>
                      <div className="mt-4 rounded-md bg-gray-100 p-4 px-4 md:px-4 z-30 animate__animated animate__zoomIn animate__faster">
                        <div className="flex flex-col gap-1">
                          <span className="font-light text-base">
                            Phone number or email
                          </span>
                          <input
                            type="text"
                            value={this.state.username}
                            onChange={(e) => {
                              this.setState({ username: e.target.value });
                              this.state.error.target !== null &&
                                this.setState({
                                  error: { target: null, msg: "" },
                                });
                            }}
                            disabled={this.state.loading}
                            autoFocus={true}
                            className={`border ${
                              this.state.error.target === "username"
                                ? "border-red-300"
                                : "border-gray-500 bg-white"
                            } ${
                              this.state.loading === true
                                ? "cursor-not-allowed"
                                : ""
                            }  bg-white text-black rounded-md px-3 py-2`}
                          />
                          <div>
                            {this.state.error.target === "username" && (
                              <Alert
                                type="danger"
                                title={"Error"}
                                description={this.state.error.msg}
                                onClose={() => {
                                  this.setState({
                                    error: { target: null, msg: "" },
                                  });
                                }}
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 mb-5 w-full mt-4">
                          <span className="font-light text-base">
                            Password{" "}
                          </span>
                          <div className="relative w-full">
                            <input
                              type={
                                this.state.passwordDisplay === true
                                  ? "text"
                                  : "password"
                              }
                              value={this.state.password}
                              disabled={this.state.loading}
                              onChange={(e) => {
                                this.setState({ password: e.target.value });
                                this.state.error.target !== null &&
                                  this.setState({
                                    error: { target: null, msg: "" },
                                  });
                              }}
                              className={`border ${
                                this.state.error.target === "password"
                                  ? "border-red-300"
                                  : "border-gray-500 bg-white"
                              } ${
                                this.state.loading === true
                                  ? "cursor-not-allowed"
                                  : ""
                              } bg-white text-black rounded-md px-3 py-2 w-full`}
                            />
                            <div
                              onClick={() =>
                                this.setState({
                                  passwordDisplay: !this.state.passwordDisplay,
                                })
                              }
                              className="absolute inset-y-0 right-0 pr-3 flex items-center leading-5 text-3xl cursor-pointer text-primary-900"
                            >
                              {this.state.passwordDisplay === false ? (
                                <AiFillEye />
                              ) : (
                                <AiOutlineEyeInvisible />
                              )}
                            </div>
                          </div>
                          <div>
                            {this.state.error.target === "password" && (
                              <Alert
                                type="danger"
                                title={"Error"}
                                description={this.state.error.msg}
                                onClose={() => {
                                  this.setState({
                                    error: { target: null, msg: "" },
                                  });
                                }}
                              />
                            )}
                          </div>
                        </div>
                        <div className="-mt-3 mb-2">
                          {this.state.error.target === "main" && (
                            <Alert
                              type="danger"
                              title={"Failed to login!"}
                              description={this.state.error.msg}
                              onClose={() => {
                                this.setState({
                                  error: { target: null, msg: "" },
                                });
                              }}
                            />
                          )}
                        </div>
                        <div className="flex flex-row items-center justify-between gap-2 w-full pt-5">
                          <button
                            disabled={this.state.loading}
                            className={`flex flex-row items-center justify-center ${
                              this.state.loading === true
                                ? "cursor-not-allowed"
                                : ""
                            } gap-2 bg-primary-800 text-white hover:bg-primary-800 rounded px-3 py-2 font-bold`}
                          >
                            <div>
                              {this.state.loading === true ? (
                                <AiOutlineLoading3Quarters className="text-xl animate-spin" />
                              ) : (
                                <AiOutlineLogin className="text-xl" />
                              )}
                            </div>
                            <span>
                              {this.state.loading === true
                                ? "Loading..."
                                : "Sign In"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3 lg:col-span-4"></div>
            </div>
          </Container>
        </div>
      </PageContainer>
    );
  }
}

export default AdminLogin;
