import TodoList from "@/components/todo/TodoList";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center mt-16 text-4xl">
        Todo List
      </div>
      <TodoList />
    </main>
  );
}
