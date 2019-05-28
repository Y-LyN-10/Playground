defmodule DiscussWeb.TopicController do
  use DiscussWeb, :controller

  def new(conn, params) do
    render(conn, "new.html")
  end
end