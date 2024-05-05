import { $, component$ } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <button
        onClick$={() => {
          const serverFn = server$(() => console.log('Hi from server'));
          serverFn();
        }}
      >
        Say Hi! Not working in prod mode
      </button>

      <div style={{ height: '40px' }}></div>

      <button
        onClick$={$(() => {
          const serverFn = server$(() => console.log('Hey from server'));
          serverFn();
        })}
      >
        Say Hey! Works on both dev and prod mode
      </button>
    </>
  );
});
