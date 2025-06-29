import { useState } from "react";

export default function Index() {
  const [selectedOrganization, setSelectedOrganization] =
    useState("whole-company");
  const [selectedDateRange, setSelectedDateRange] = useState("last-month");

  const isWholeDivision = selectedOrganization !== "whole-company";

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

                {/* Filters */}
                <div className="flex items-center gap-4">
                  {/* Organization Filter */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[rgba(240,240,240,0.7)] text-xs">
                      Organization
                    </label>
                    <select
                      value={selectedOrganization}
                      onChange={(e) => setSelectedOrganization(e.target.value)}
                      className="bg-[rgba(240,240,240,0.1)] border border-[rgba(240,240,240,0.2)] text-[#F0F0F0] text-sm rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00604C]"
                    >
                      <option
                        value="whole-company"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Whole Company
                      </option>
                      <option
                        value="customer-service"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Customer Service
                      </option>
                      <option
                        value="development"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Development
                      </option>
                      <option
                        value="marketing"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Marketing
                      </option>
                      <option
                        value="sales"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Sales
                      </option>
                      <option
                        value="research"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Research
                      </option>
                    </select>
                  </div>

                  {/* Date Range Filter */}
                  <div className="flex flex-col gap-1">
                    <label className="text-[rgba(240,240,240,0.7)] text-xs">
                      Date Range
                    </label>
                    <select
                      value={selectedDateRange}
                      onChange={(e) => setSelectedDateRange(e.target.value)}
                      className="bg-[rgba(240,240,240,0.1)] border border-[rgba(240,240,240,0.2)] text-[#F0F0F0] text-sm rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00604C]"
                    >
                      <option
                        value="today"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Today
                      </option>
                      <option
                        value="yesterday"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Yesterday
                      </option>
                      <option
                        value="last-2-weeks"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Last 2 Weeks
                      </option>
                      <option
                        value="last-month"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Last Month
                      </option>
                      <option
                        value="last-3-months"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Last 3 Months
                      </option>
                      <option
                        value="last-6-months"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Last 6 Months
                      </option>
                      <option
                        value="last-year"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Last Year
                      </option>
                      <option
                        value="last-5-years"
                        className="bg-[#001008] text-[#F0F0F0]"
                      >
                        Last 5 Years
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Recurring User Percentage */}
              <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#F0F0F0] text-lg font-medium">
                    Recurring Users
                  </h3>
                  <div className="w-3 h-3 bg-[#00604C] rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl font-bold text-[#F0F0F0]">75.7%</div>
                  <div className="text-sm font-medium text-green-400">
                    +2.4%
                  </div>
                </div>
                <div className="text-sm text-[rgba(240,240,240,0.7)]">
                  2,156 of 2,847 users
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
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl font-bold text-[#F0F0F0]">2,847</div>
                  <div className="text-sm font-medium text-green-400">
                    +8.3%
                  </div>
                </div>
                <div className="flex justify-between text-sm text-[rgba(240,240,240,0.7)]">
                  <span>
                    Recurring: 2,156{" "}
                    <span className="text-green-400">+5.2%</span>
                  </span>
                  <span>
                    New: 691 <span className="text-green-400">+24.1%</span>
                  </span>
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
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl font-bold text-[#F0F0F0]">47</div>
                  <div className="text-sm font-medium text-green-400">
                    +11.9%
                  </div>
                </div>
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
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl font-bold text-[#F0F0F0]">87.3%</div>
                  <div className="text-sm font-medium text-green-400">
                    +2.1%
                  </div>
                </div>
                <div className="text-sm text-[rgba(240,240,240,0.7)]">
                  Optimal performance
                </div>
              </div>
            </div>

            {/* Additional Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Messages Sent */}
              <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#F0F0F0] text-lg font-medium">
                    Messages Sent
                  </h3>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl font-bold text-[#F0F0F0]">
                    34,821
                  </div>
                  <div className="text-sm font-medium text-green-400">
                    +12.0%
                  </div>
                </div>
                <div className="text-sm text-[rgba(240,240,240,0.7)]">
                  +3,731 from yesterday
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
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl font-bold text-[#F0F0F0]">156</div>
                  <div className="text-sm font-medium text-green-400">
                    +18.9%
                  </div>
                </div>
                <div className="text-sm text-[rgba(240,240,240,0.7)]">
                  +25 since yesterday
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
                    { name: "GPT Assistant Pro", users: 1847, delta: "+5.3%" },
                    { name: "Code Helper AI", users: 1653, delta: "+12.1%" },
                    { name: "Data Analyzer", users: 1421, delta: "-2.4%" },
                    { name: "Content Creator", users: 1298, delta: "+8.7%" },
                    { name: "Research Bot", users: 987, delta: "+15.2%" },
                    { name: "Customer Support AI", users: 834, delta: "-1.8%" },
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
                      <div className="text-right">
                        <span className="text-[rgba(240,240,240,0.7)] text-sm">
                          {agent.users.toLocaleString()} users
                        </span>
                        <div
                          className={`text-xs font-medium ${
                            agent.delta.startsWith("+")
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {agent.delta}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Utilized Divisions/Departments */}
              <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6">
                <h3 className="text-[#F0F0F0] text-lg font-medium mb-4">
                  {isWholeDivision
                    ? "Top Utilized Departments"
                    : "Top Utilized Divisions"}
                </h3>
                <div className="space-y-4">
                  {(isWholeDivision
                    ? [
                        {
                          name: "Support Team A",
                          utilization: 96.4,
                          color: "#00604C",
                          delta: "+1.2%",
                        },
                        {
                          name: "Support Team B",
                          utilization: 91.8,
                          color: "#0080FF",
                          delta: "+3.4%",
                        },
                        {
                          name: "Technical Support",
                          utilization: 87.3,
                          color: "#8B5CF6",
                          delta: "-0.8%",
                        },
                        {
                          name: "Escalation Team",
                          utilization: 82.7,
                          color: "#F59E0B",
                          delta: "+5.1%",
                        },
                        {
                          name: "Training Team",
                          utilization: 75.2,
                          color: "#EF4444",
                          delta: "-2.3%",
                        },
                      ]
                    : [
                        {
                          name: "Customer Service",
                          utilization: 94.2,
                          color: "#00604C",
                          delta: "+1.7%",
                        },
                        {
                          name: "Development",
                          utilization: 89.7,
                          color: "#0080FF",
                          delta: "+4.2%",
                        },
                        {
                          name: "Marketing",
                          utilization: 83.5,
                          color: "#8B5CF6",
                          delta: "-1.3%",
                        },
                        {
                          name: "Sales",
                          utilization: 78.9,
                          color: "#F59E0B",
                          delta: "+2.8%",
                        },
                        {
                          name: "Research",
                          utilization: 72.1,
                          color: "#EF4444",
                          delta: "-3.1%",
                        },
                      ]
                  ).map((division, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm text-[#F0F0F0] mb-1">
                        <span>{division.name}</span>
                        <div className="flex items-center gap-2">
                          <span>{division.utilization}%</span>
                          <span
                            className={`text-xs font-medium ${
                              division.delta.startsWith("+")
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {division.delta}
                          </span>
                        </div>
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
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="text-4xl font-bold text-[#F0F0F0]">4.7</div>
                    <div className="text-sm font-medium text-green-400">
                      +0.1
                    </div>
                  </div>
                  <div className="text-sm text-[rgba(240,240,240,0.7)]">
                    Overall Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="text-4xl font-bold text-[#F0F0F0]">
                      12,847
                    </div>
                    <div className="text-sm font-medium text-green-400">
                      +7.4%
                    </div>
                  </div>
                  <div className="text-sm text-[rgba(240,240,240,0.7)]">
                    Total Reviews
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="text-4xl font-bold text-[#F0F0F0]">94%</div>
                    <div className="text-sm font-medium text-green-400">
                      +2.1%
                    </div>
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

            {/* User Visit List */}
            <div className="bg-[rgba(240,240,240,0.05)] backdrop-blur-sm border border-[rgba(240,240,240,0.1)] rounded-lg p-6 mb-6">
              <h3 className="text-[#F0F0F0] text-xl font-medium mb-6">
                User Activity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Sarah Chen", visits: 847, delta: "+23" },
                  { name: "Michael Rodriguez", visits: 623, delta: "+15" },
                  { name: "Emily Johnson", visits: 591, delta: "+8" },
                  { name: "David Kim", visits: 478, delta: "-3" },
                  { name: "Jessica Brown", visits: 432, delta: "+12" },
                  { name: "Alex Thompson", visits: 389, delta: "+7" },
                  { name: "Maria Garcia", visits: 356, delta: "+19" },
                  { name: "James Wilson", visits: 298, delta: "+5" },
                  { name: "Lisa Wang", visits: 267, delta: "-1" },
                  { name: "Robert Davis", visits: 234, delta: "+11" },
                  { name: "Amanda Lee", visits: 198, delta: "+6" },
                  { name: "Carlos Martinez", visits: 145, delta: "+9" },
                  { name: "Sophie Taylor", visits: 89, delta: "+14" },
                ].map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-[rgba(240,240,240,0.03)] rounded border border-[rgba(240,240,240,0.05)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#00604C] rounded-full flex items-center justify-center">
                        <span className="text-[#F0F0F0] text-sm font-medium">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <span className="text-[#F0F0F0] text-sm font-medium">
                        {user.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-[#F0F0F0] text-sm font-bold">
                          {user.visits.toLocaleString()}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            user.delta.startsWith("+")
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {user.delta}
                        </span>
                      </div>
                      <div className="text-xs text-[rgba(240,240,240,0.7)]">
                        visits
                      </div>
                    </div>
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
