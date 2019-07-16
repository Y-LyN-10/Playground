defmodule DiscussWeb.TopicController do
  use DiscussWeb, :controller

  alias Discuss.DiscussTopic
  alias Discuss.DiscussTopic.Topic

  plug DiscussWeb.Plugs.RequireAuth when action in [:new, :create, :edit, :update, :delete]
  plug :check_topic_owner when action in [:update, :edit, :delete]

  action_fallback DiscussWeb.FallbackController

  def index(conn, _params) do
    topics = DiscussTopic.list_topics()
    render(conn, "index.html", topics: topics)
  end

  def new(conn, _params) do
    changeset = DiscussTopic.change_topic(%Topic{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"topic" => topic_params}) do
    case DiscussTopic.create_topic(conn.assigns.user, topic_params) do
      {:ok, topic} ->
        conn
        |> put_flash(:info, "Topic created successfully.")
        |> redirect(to: Routes.topic_path(conn, :show, topic))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    topic = DiscussTopic.get_topic!(id)
    render(conn, "show.html", topic: topic)
  end

  def edit(conn, %{"id" => id}) do
    case DiscussTopic.get_topic!(id) do
      nil ->
        conn
        |> put_status(:not_found)
        |> put_view(DiscussWeb.ErrorView)
        |> render(:"404")
      topic ->
        changeset = DiscussTopic.change_topic(topic)
        render(conn, "edit.html", topic: topic, changeset: changeset)
      end
  end

  def update(conn, %{"id" => id, "topic" => topic_params}) do
    topic = DiscussTopic.get_topic!(id)

    case DiscussTopic.update_topic(topic, topic_params) do
      {:ok, topic} ->
        conn
        |> put_flash(:info, "Topic updated successfully.")
        |> redirect(to: Routes.topic_path(conn, :show, topic))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", topic: topic, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    topic = DiscussTopic.get_topic!(id)
    {:ok, _topic} = DiscussTopic.delete_topic(topic)

    conn
    |> put_flash(:info, "Topic deleted successfully.")
    |> redirect(to: Routes.topic_path(conn, :index))
  end

  def check_topic_owner(conn, _params) do
    %{params: %{"id" => topic_id}} = conn

    if((Discuss.Repo.get(Topic, topic_id)).user_id == conn.assigns.user.id) do
      conn
    else
      conn
      |> put_flash(:error, "You cannot edit that")
      |> redirect(to: Routes.topic_path(conn, :index))
      |> halt()
    end
  end

end
