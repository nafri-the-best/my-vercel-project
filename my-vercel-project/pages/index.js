import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div style={{ padding: "2rem" }}>
        <p>Signed in as {session.user.email || session.user.name || "User"}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }
  return (
    <div style={{ padding: "2rem" }}>
      <p>Not signed in</p>
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
}
