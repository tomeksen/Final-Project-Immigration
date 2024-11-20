const PaymentsPage = () => {
  return (
    <>
      <section className="h-screen w-full flex flex-col">
        <h1 className="h-20 text-center">Payment Page</h1>

        {/* Main content */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* Layout for xl */}
          <div className="hidden xl:grid gap-4 xl:grid-cols-3 xl:grid-rows-3 h-full">
            {/* Row 1 (2:1 ratio in xl) */}
            <div className="rounded-xl bg-muted/50 xl:col-span-2">01</div>
            <div className="rounded-xl bg-muted/50">02</div>
            {/* Row 2 */}
            <div className="rounded-xl bg-muted/50 xl:col-span-2 xl:row-span-2">
              03
            </div>
            <div className="rounded-xl bg-muted/50">04</div>
            <div className="rounded-xl bg-muted/50">05</div>
          </div>

          {/* Layout for md */}
          <div className="hidden md:grid gap-4 md:grid-cols-1 md:grid-rows-[auto_auto_auto] xl:hidden h-full">
            {/* Row 1 */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-muted/50">01</div>
              <div className="rounded-xl bg-muted/50">02</div>
            </div>
            {/* Row 2 */}
            <div className="rounded-xl bg-muted/50">03</div>
            {/* Row 3 */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-muted/50">04</div>
              <div className="rounded-xl bg-muted/50">05</div>
            </div>
          </div>

          {/* Layout for small screens */}
          <div className="md:hidden xl:hidden grid flex-col gap-4 h-full">
            <div className="rounded-xl bg-muted/50">01</div>
            <div className="rounded-xl bg-muted/50">02</div>
            <div className="rounded-xl bg-muted/50">03</div>
            <div className="rounded-xl bg-muted/50">04</div>
            <div className="rounded-xl bg-muted/50">05</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentsPage;
