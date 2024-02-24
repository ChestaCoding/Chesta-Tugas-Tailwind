function App() {
  return (
    <>
      <h1>1. Font Family</h1>
      <div className="w-full">
        <p className="font-sans">Chesta Azka Sofyan</p>
        <p className="font-serif">Chesta Azka Sofyan</p>
        <p className="font-mono">Chesta Azka Sofyan</p>
      </div>
      <br />
      <br />
      <h2>2. Hover</h2>
      <p className="font-sans hover:font-serif">Arahkan Cursor</p>
      <br />
      <br />
      <h2>3. Font Size</h2>
      <p className="text-sm">Bina Qurani City</p>
      <p className="text-base">Bina Qurani City</p>
      <p className="text-lg">Bina Qurani City</p>
      <p className="text-xl">Bina Qurani City</p>
      <p className="text-2xl">Bina Qurani City</p>
      <p className="text-[100px]">Bina Qurani City</p>
      <br />
      <br />
      <h2>4. Italic</h2>
      <p className="italic">ESNE</p>
      <p className="not-italic">ESNE</p>
      <br />
      <br />
      <h2>5. Font Weight</h2>
      <p className="font-light">Free Fire</p>
      <p className="font-normal">Free Fire</p>
      <p className="font-medium">Free Fire</p>
      <p className="font-semibold">Free Fire</p>
      <p className="font-bold">Free Fire</p>
      <br />
      <br />
      <h2>6. Letter Spacing</h2>
      <p className="tracking-tighter">Shabrina</p>
      <p className="tracking-normal">Shabrina</p>
      <p className="tracking-widest">Shabrina</p>
      <br />
      <br />
      <h2>7. Line Height</h2>
      <p className="leading-normal">The quick brown fox</p>
      <p className="leading-relaxed">The quick brown fox</p>
      <p className="leading-loose">The quick brown fox</p>
      <br />
      <br />
      <h2>8. Text Align</h2>
      <p className="text-right">The quick brown fox</p>
      <p className="text-center">The quick brown fox</p>
      <p className="text-left">The quick brown fox</p>
      <p className="text-justify">The quick brown fox</p>
      <br /> <br />
      <h2>9. Text Color</h2>
      <p className="text-sky-300">The quick brown fox</p>
      <p className="text-sky-400">The quick brown fox</p>
      <p className="text-sky-500">The quick brown fox</p>
      <p className="text-sky-600">The quick brown fox</p>
      <p className="text-sky-700">The quick brown fox</p>
      <p className="text-sky-800">The quick brown fox</p>
      <p className="text-sky-900 hover:text-purple-500">The quick brown fox</p>
      <br />
      <br />
      <h2>10. Text Decoration</h2>
      <p className="underline">The quick brown fox</p>
      <p className="overline">The quick brown fox</p>
      <p className="line-through">The quick brown fox</p>
      <p className="no-underline">The quick brown fox</p>
      <p className="underline decoration-solid">The quick brown fox</p>
      <p className="underline decoration-double">The quick brown fox</p>
      <p className="underline decoration-dotted">The quick brown fox</p>
      <p className="underline decoration-dashed">The quick brown fox</p>
      <p className="underline decoration-wavy">The quick brown fox</p>
      <br />
      <br />
      <h2>11. Background</h2>
      <div className="bg-indigo-500">The quick brown fox</div>
      <div className="bg-rose-500">The quick brown fox</div>
      <div className="bg-teal-500">The quick brown fox</div>
      <br />
      <br />
      <h2>12. Width</h2>
      <div className="w-full bg-indigo-300">w-full</div>
      <div className="w-96 bg-indigo-400">w-96</div>
      <div className="w-80 bg-indigo-500">w-80</div>
      <div className="w-64 bg-indigo-600">w-64</div>
      <div className="w-48 bg-indigo-700">w-48</div>
      <div className="w-40 bg-indigo-800">w-40</div>
      <div className="w-32 bg-indigo-900">w-32</div>
      <div className="w-24 bg-indigo-950">w-24</div>
      <div className="w-[500px] bg-indigo-500">w-custom</div>
      <br />
      <br />
      <h2>13. Height</h2>
      <div className="h-96 w-96 bg-indigo-400">h-96</div>
      <div className="h-80 w-80 bg-indigo-500">h-80</div>
      <div className="h-64 w-64 bg-indigo-600">h-64</div>
      <div className="h-48 w-48 bg-indigo-700">h-48</div>
      <div className="h-40 w-40 bg-indigo-800">h-40</div>
      <div className="h-32 w-32 bg-indigo-900">h-32</div>
      <div className="h-24 w-24 bg-indigo-950">h-24</div>
      <div className="h-screen w-screen bg-green-300">h-screen</div>
      <div className="h-[100px] w-24 bg-indigo-900 text-gray-50">h-custom</div>
      <br />
      <br />
      <h2>14. Padding</h2>
      <div className="pt-6 bg-slate-500">pt-6</div>
      <div className="pr-4 bg-rose-500">pr-4</div>
      <div className="pb-8 bg-neutral-400">pb-8</div>
      <div className="pl-2 bg-gray-400">pl-2</div>
      <div className="py-2 bg-yellow-400">py-2</div>
      <div className="px-2 bg-lime-700px">px-2</div>
      <h2>15. Margin</h2>
      <h2>16. Justify Content + Gap</h2>
      <div className="flex justify-start bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-cyan-400">01</div>
        <div className="p-2 rounded-lg bg-cyan-400">02</div>
        <div className="p-2 rounded-lg bg-cyan-400">03</div>
      </div>
      <div className="flex justify-center bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-cyan-400">01</div>
        <div className="p-2 rounded-lg bg-cyan-400">02</div>
        <div className="p-2 rounded-lg bg-cyan-400">03</div>
      </div>
      <div className="flex justify-end bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-cyan-400">01</div>
        <div className="p-2 rounded-lg bg-cyan-400">02</div>
        <div className="p-2 rounded-lg bg-cyan-400">03</div>
      </div>
      <div className="flex justify-between bg-cyan-200 gap-2">
        <div className="p-2 rounded-lg bg-cyan-400">01</div>
        <div className="p-2 rounded-lg bg-cyan-400">02</div>
        <div className="p-2 rounded-lg bg-cyan-400">03</div>
      </div>
      <br />
      <br />
      <h2>17. Borders</h2>
      <div className="rounded w-40 text-center border-2 border-rose-400">
        Rounded
      </div>
      <div className="rounded w-40 text-center border- border-indigo-600">
        Rounded
      </div>
      <div className="rounded w-40 text-center border-2 border-teal-500">
        Rounded
      </div>
      <div className="rounded w-40 text-center border-8 border-rose-400">
        Rounded
      </div>
      <div className="rounded w-40 text-center border-[3px] border-slate-400">
        Rounded
      </div>
      <br />
      <br />
      <h2>18. Flex</h2>
      <div className="flex-none w-14 bg-sky-500">flex-none</div>
      <div className="flex-initial w-64 bg-violet-500">flex-initial</div>
      <div className="flex-auto w-32 bg-sky-500">flex-auto</div>
      <br />
      <br />
      <h2>19. Cursor</h2>
      <button
        type="button"
        className="cursor-pointer bg-rose-500 p-2 rounded-md"
      >
        Sumbit
      </button>
      <br />
      <button
        type="button"
        className="cursor-progress bg-indigo-400 p-2 rounded-md"
      >
        Saving
      </button>
      <br />
      <button
        type="button"
        className="cursor-not-allowed bg-emeral-400 p-2 rounded-md"
      >
        Confirm
      </button>
      <br />
      <br />
      <h2>20. Shadow</h2>
      <div className="bg-cyan-500 shadow-md shadow-cyan-500/50 w-40 rounded-xl text-center py-2">
        Subscribe
      </div>
      <br />
      <div className="bg-cyan-500 shadow-lg shadow-blue-500/50 w-40 text-center py-2">
        Subscribe
      </div>
      <br />
      <div className="bg-cyan-500 shadow-xl shadow-cyan-500/50 w-40 rounded-xl text-center py-2">
        Subscribe
      </div>
      <br />
      <br />
      <h2>21. Display</h2>
      <span className="inline bg-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel ut
        ullam quisquam ea expedita dolore. Magni rem accusamus ex, incidunt,
        error aperiam amet quo explicabo, officiis ut impedit provident.
      </span>
      <br />
      <span className="inline-block bg-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel ut
        ullam quisquam ea expedita dolore. Magni rem accusamus ex, incidunt,
        error aperiam amet quo explicabo, officiis ut impedit provident.
      </span>
      <br />
      <span className="block bg-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel ut
        ullam quisquam ea expedita dolore. Magni rem accusamus ex, incidunt,
        error aperiam amet quo explicabo, officiis ut impedit provident.
      </span>
    </>
  );
}

export default App;
