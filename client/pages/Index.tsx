export default function Index() {
  return (
    <div className="min-h-screen bg-[#002010] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        {/* First radial gradient */}
        <div
          className="absolute w-[90rem] h-[90rem] -top-60 -right-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #00604C 0%, rgba(0, 16, 8, 0) 100%)",
            filter: "blur(24px)",
          }}
        />
        {/* Second radial gradient */}
        <div
          className="absolute w-[133rem] h-[136rem] -top-60 -left-60 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #00604C 0%, rgba(0, 16, 8, 0) 100%)",
            filter: "blur(24px)",
          }}
        />
      </div>

      {/* Main container */}
      <div className="relative z-10 min-h-screen bg-[#001008] shadow-[inset_0_0_56px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="w-full max-w-[68.25rem] mx-auto">
            <div className="flex justify-between items-center px-4 sm:px-9 py-5 sm:py-10 border-b border-[rgba(240,240,240,0.15)]">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <h1
                      className="text-[#F0F0F0] text-xl sm:text-2xl font-normal leading-6"
                      style={{
                        fontFamily:
                          "PP Neue Machina, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      AI Space Dashboard
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Container */}
          <div className="w-full max-w-[56.25rem] mx-auto mt-8 sm:mt-12 px-3">
            <div className="flex flex-col items-center gap-8">
              {/* Dashboard Content */}
              <div className="w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b897a5b65f09e95edafff44b3482f9c29fd541c4?width=1776"
                  alt="Dashboard Content"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
