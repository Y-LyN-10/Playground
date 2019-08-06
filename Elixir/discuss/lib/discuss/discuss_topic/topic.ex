defmodule Discuss.DiscussTopic.Topic do
  use Ecto.Schema
  import Ecto.Changeset

  schema "topics" do
    field :title, :string

    belongs_to :user, Discuss.DiscussTopic.User

    has_many :comments, Discuss.DiscussTopic.Comment, on_delete: :delete_all

    timestamps()
  end

  @doc false
  def changeset(topic, attrs \\ %{}) do
    topic
    |> cast(attrs, [:title])
    |> validate_required([:title])
  end
end