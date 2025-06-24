export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
};

function User({ id, name, username, email }: UserType) {
  return (
    <div
      className={"bg-gray-200 p-4 rounded-md outline-1 solid outline-gray-300"}
    >
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>
      <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
        {email.toLowerCase()}
      </a>
    </div>
  );
}

export default User;