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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* User Count */}
              <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#F0F0F0] text-lg font-medium">
                    User Count
                  </h3>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-[#F0F0F0] mb-2">
                  2,847
                </div>
                <div className="flex justify-between text-sm text-[rgba(240,240,240,0.7)]">
                  <span>Recurring: 2,156</span>
                  <span>New: 691</span>
                </div>
              </div>

              {/* Number of Agents */}
              <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#F0F0F0] text-lg font-medium">
                    Active Agents
                  </h3>
                  <div className="w-3 h-3 bg-[#00604C] rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-[#F0F0F0] mb-2">47</div>
                <div className="text-sm text-[rgba(240,240,240,0.7)]">
                  +5 deployed today
                </div>
              </div>

              {/* Utilization Percentage */}
              <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#F0F0F0] text-lg font-medium">
                    Utilization
                  </h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-3xl font-bold text-[#F0F0F0] mb-2">
                  87.3%
                </div>
                <div className="text-sm text-[rgba(240,240,240,0.7)]">
                  Optimal performance
                </div>
              </div>
            </div>

            {/* Additional Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Messages Sent */}
              <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#F0F0F0] text-lg font-medium">
                    Messages Sent
                  </h3>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-[#F0F0F0] mb-2">
                  34,821
                </div>
                <div className="text-sm text-[rgba(240,240,240,0.7)]">
                  +12% from yesterday
                </div>
              </div>

              {/* New Suggestions */}
              <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#F0F0F0] text-lg font-medium">
                    New Suggestions
                  </h3>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-[#F0F0F0] mb-2">
                  156
                </div>
                <div className="text-sm text-[rgba(240,240,240,0.7)]">
                  Ready for review
                </div>
              </div>
            </div>

            {/* Most Used Agents and Top Divisions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Most Used Agents */}
              <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
                <h3 className="text-[#F0F0F0] text-lg font-medium mb-4">
                  Most Used Agents
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "GPT Assistant Pro", users: 1847 },
                    { name: "Code Helper AI", users: 1653 },
                    { name: "Data Analyzer", users: 1421 },
                    { name: "Content Creator", users: 1298 },
                    { name: "Research Bot", users: 987 },
                    { name: "Customer Support AI", users: 834 },
                  ].map((agent, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#00604C] rounded-full"></div>
                        <span className="text-[#F0F0F0] text-sm font-medium">
                          {agent.name}
                        </span>
                      </div>
                      <span className="text-[rgba(240,240,240,0.7)] text-sm">
                        {agent.users.toLocaleString()} users
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Utilized Divisions */}
              <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
                <h3 className="text-[#F0F0F0] text-lg font-medium mb-4">
                  Top Utilized Divisions
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Customer Service",
                      utilization: 94.2,
                      color: "#00604C",
                    },
                    {
                      name: "Development",
                      utilization: 89.7,
                      color: "#0080FF",
                    },
                    { name: "Marketing", utilization: 83.5, color: "#8B5CF6" },
                    { name: "Sales", utilization: 78.9, color: "#F59E0B" },
                    { name: "Research", utilization: 72.1, color: "#EF4444" },
                  ].map((division, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-[#F0F0F0] mb-1">
                        <span>{division.name}</span>
                        <span>{division.utilization}%</span>
                      </div>
                      <div className="w-full bg-[rgba(240,240,240,0.1)] rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${division.utilization}%`,
                            backgroundColor: division.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Average Rating */}
            <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#F0F0F0] text-xl font-medium">
                  Average Agent Rating
                </h3>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${star <= 4.7 ? "text-yellow-400" : "text-[rgba(240,240,240,0.3)]"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F0F0F0] mb-1">
                    4.7
                  </div>
                  <div className="text-sm text-[rgba(240,240,240,0.7)]">
                    Overall Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F0F0F0] mb-1">
                    12,847
                  </div>
                  <div className="text-sm text-[rgba(240,240,240,0.7)]">
                    Total Reviews
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F0F0F0] mb-1">
                    94%
                  </div>
                  <div className="text-sm text-[rgba(240,240,240,0.7)]">
                    Satisfaction Rate
                  </div>
                </div>
              </div>
            </div>

            {/* System Performance Chart */}
            <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6 mb-6">
              <h3 className="text-[#F0F0F0] text-xl font-medium mb-6">
                System Performance
              </h3>
              <div className="h-64 relative">
                <div className="absolute inset-0 flex items-end justify-between px-4">
                  {[65, 78, 82, 71, 88, 93, 89, 95, 91, 96, 94, 98].map(
                    (value, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="w-8 bg-gradient-to-t from-[#00604C] to-[#00604C]/40 rounded-t"
                          style={{ height: `${value}%` }}
                        ></div>
                        <span className="text-xs text-[rgba(240,240,240,0.7)] mt-2">
                          {index + 1}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* AI Operations Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Recent Operations */}
              <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
                <h3 className="text-[#F0F0F0] text-lg font-medium mb-4">
                  Recent Operations
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      name: "Neural Network Training",
                      status: "Running",
                      progress: 78,
                    },
                    {
                      name: "Data Processing Pipeline",
                      status: "Completed",
                      progress: 100,
                    },
                    {
                      name: "Model Inference",
                      status: "Running",
                      progress: 45,
                    },
                    {
                      name: "Resource Optimization",
                      status: "Queued",
                      progress: 0,
                    },
                  ].map((operation, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <div className="text-[#F0F0F0] text-sm font-medium">
                          {operation.name}
                        </div>
                        <div className="w-full bg-[rgba(240,240,240,0.1)] rounded-full h-2 mt-2">
                          <div
                            className="bg-[#00604C] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${operation.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <span
                        className={`ml-4 px-2 py-1 rounded text-xs ${
                          operation.status === "Running"
                            ? "bg-blue-500/20 text-blue-300"
                            : operation.status === "Completed"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-gray-500/20 text-gray-300"
                        }`}
                      >
                        {operation.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resource Usage */}
              <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
                <h3 className="text-[#F0F0F0] text-lg font-medium mb-4">
                  Resource Usage
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "CPU Usage", value: 67, color: "#00604C" },
                    { name: "Memory", value: 84, color: "#0080FF" },
                    { name: "GPU Usage", value: 92, color: "#FF6B6B" },
                    { name: "Storage", value: 56, color: "#FFD93D" },
                  ].map((resource, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-[#F0F0F0] mb-1">
                        <span>{resource.name}</span>
                        <span>{resource.value}%</span>
                      </div>
                      <div className="w-full bg-[rgba(240,240,240,0.1)] rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${resource.value}%`,
                            backgroundColor: resource.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Network Status */}
            <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
              <h3 className="text-[#F0F0F0] text-xl font-medium mb-6">
                Network Nodes
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                        i < 8
                          ? "border-[#00604C] bg-[#00604C]/20"
                          : i < 10
                            ? "border-yellow-500 bg-yellow-500/20"
                            : "border-red-500 bg-red-500/20"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${
                          i < 8
                            ? "bg-[#00604C]"
                            : i < 10
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                      ></div>
                    </div>
                    <span className="text-xs text-[rgba(240,240,240,0.7)] mt-2">
                      Node {i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
