defmodule DiscussWeb.Router do
  use DiscussWeb, :router

  pipeline :browser do
    plug :accepts, ["html", "json"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", DiscussWeb do
    pipe_through :browser

    get "/", TopicController, :index
    get "/topics/new", TopicController, :new
    get "/topics/:id/edit", TopicController, :edit

    post "/topics", TopicController, :create
    get "/topics/:id", TopicController, :show
    put "/topics/:id", TopicController, :update
    delete "/topics/:id", TopicController, :delete

  end

  # Other scopes may use custom stacks.
  # scope "/api", DiscussWeb do
  #   pipe_through :api
  # end
end
