import { $, component$ } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <button
        onClick$={$(() => {
          console.log("server$");
          const serverFn_0 = server$(() => {
            debugger;
            console.log("Hi from server");
          });
          serverFn_0();
        })}
      >
        Say Hi! Not working in prod mode
      </button>

      <div style={{ height: "40px" }}></div>

      <button
        onClick$={$(() => {
          const serverFn_1 = server$(() => console.log("Hey from server"));
          serverFn_1();
        })}
      >
        Say Hey! Works on both dev and prod mode
      </button>
    </>
  );
});
