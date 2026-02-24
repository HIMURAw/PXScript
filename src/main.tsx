import { h, Fragment } from "./core/h";
import { signal } from "./core/signal";
import { createApp } from "./core/app";

function Counter() {
    const count = signal(0);

    return (
        <div className="container" style="text-align: center; padding: 2rem; font-family: sans-serif;">
            <h1>PXScript Framework</h1>
            <p>Bu tamamen sıfırdan yapılmış bir reactive framework örneğidir.</p>

            <div style="font-size: 2rem; margin: 1rem 0;">
                Sayaç: {count.get()}
            </div>

            <button
                onClick={() => count.set(count.get() + 1)}
                style="padding: 0.5rem 1rem; cursor: pointer; border-radius: 4px; border: 1px solid #ccc;"
            >
                Arttır
            </button>

            <button
                onClick={() => count.set(count.get() - 1)}
                style="padding: 0.5rem 1rem; cursor: pointer; border-radius: 4px; border: 1px solid #ccc; margin-left: 0.5rem;"
            >
                Azalt
            </button>
        </div>
    );
}

createApp(Counter).mount("#app");
