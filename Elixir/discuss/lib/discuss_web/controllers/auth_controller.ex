defmodule DiscussWeb.AuthController do
  use DiscussWeb, :controller

  alias Discuss.DiscussTopic.User
  alias Discuss.Repo

  plug Ueberauth

  def callback(%{assigns: %{ueberauth_auth: auth}} = conn, params) do
    IO.inspect(auth)

    user_attrs = %{
      token: auth.credentials.token,
      email: auth.info.email,
      provider: "Github"
    }

    changeset = User.changeset(%User{}, user_attrs)

    signin(conn, changeset)
  end

  defp signin(conn, changeset) do
    case insert_or_update_user(changeset) do
      {:ok, user} ->
        conn
        |> put_flash(:info, "Welcome back!")
        |> put_session(:user_id, user.id)
        |> redirect(to: Routes.topic_path(conn, :index))
      {:error, _reason} ->
        conn
        |> put_flash(:error, "Error signing in")
        |> redirect(to: Routes.topic_path(conn, :index))
    end
  end

  defp insert_or_update_user(changeset) do
    case Repo.get_by(User, email: changeset.changes.email) do
      nil -> Repo.insert(changeset)
      user -> {:ok, user}
    end
  end

end
