import render from "./render";

export default function Popup() {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Hello, World!</h1>
    </main>
  );
}

render(<Popup />);
