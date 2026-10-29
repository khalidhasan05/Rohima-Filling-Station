import React, { useState } from 'react';
import { Users, Award, Shield, Truck, Fuel, DollarSign, Briefcase, Phone, Moon, Sun } from 'lucide-react';
import { EMPLOYEES, Employee } from '../data/stationData.ts';

export const TeamSection: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = [
    { label: 'All Staff', key: 'All', count: 14 },
    { label: 'Leadership', key: 'Leadership', count: 1 },
    { label: 'Management', key: 'Management', count: 1 },
    { label: 'Cash & Billing', key: 'Cash & Billing', count: 2 },
    { label: 'Nozzle Crew', key: 'Forecourt Operations', count: 7 },
    { label: 'Logistics & Drivers', key: 'Transport & Logistics', count: 3 }
  ];

  const filteredEmployees = EMPLOYEES.filter((emp) => {
    if (selectedDept === 'All') return true;
    return emp.department === selectedDept;
  });

  const getRoleIcon = (dept: Employee['department']) => {
    switch (dept) {
      case 'Leadership':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'Management':
        return <Briefcase className="w-4 h-4 text-sky-400" />;
      case 'Cash & Billing':
        return <DollarSign className="w-4 h-4 text-emerald-400" />;
      case 'Forecourt Operations':
        return <Fuel className="w-4 h-4 text-amber-400" />;
      case 'Transport & Logistics':
        return <Truck className="w-4 h-4 text-purple-400" />;
      default:
        return <Users className="w-4 h-4 text-neutral-400" />;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter((n) => !['MD', 'Md', 'vai'].includes(n))
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase() || name.slice(0, 2).toUpperCase();
  };

  return (
    <section id="employees" className="py-16 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              Station Crew & Administration
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-brand">
              Meet Our Dedicated Team
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              14 dedicated members at Mollahat, Bagerhat — from executive leadership and transparent billing to expert day & night nozzlemen and certified petroleum tanker drivers.
            </p>
          </div>

          <div className="text-xs text-neutral-400 bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800 self-start md:self-auto font-medium">
            Total Forecourt Staff: <span className="text-amber-400 font-bold tabular-nums">14 Members</span>
          </div>
        </div>

        {/* Department Filter Tabs (Segmented control) */}
        <div className="flex flex-wrap items-center gap-1.5 mb-10 p-1.5 bg-neutral-900/80 rounded-xl border border-neutral-800/80">
          {departments.map((dept) => (
            <button
              key={dept.key}
              onClick={() => setSelectedDept(dept.key)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                selectedDept === dept.key
                  ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              <span>{dept.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                selectedDept === dept.key ? 'bg-neutral-950 text-amber-400' : 'bg-neutral-800 text-neutral-400'
              }`}>
                {dept.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Key Leadership Spotlight (MD & Manager) when viewing All or Leadership/Management */}
        {(selectedDept === 'All' || selectedDept === 'Leadership' || selectedDept === 'Management') && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* MD Card */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-amber-500/30 rounded-xl p-6 relative overflow-hidden shadow-xl flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <img
                      src="/assets/aistudio/image_e5d7b526.png"
                      alt="MD Nazrul Islam Milton"
                      className="w-14 h-14 rounded-xl object-cover object-top border-2 border-amber-500 shadow-lg shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-0.5">
                        <Award className="w-3.5 h-3.5" />
                        <span>Managing Director (MD)</span>
                      </div>
                      <h3 className="text-xl font-bold text-white font-brand">
                        MD Nazrul Islam Milton
                      </h3>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        Executive Leadership · 12+ Years Experience
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed bg-neutral-950/70 p-3.5 rounded-lg border border-neutral-800/80 mb-4">
                  Guiding Rohima Filling Station in Mollahat, Bagerhat with an uncompromising commitment to certified Padma Oil fuel purity, calibrated volumetric dispensing, and highway community trust.
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs">
                <span className="text-neutral-400 font-mono">01715620844</span>
                <a
                  href="tel:01715620844"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call MD Milton</span>
                </a>
              </div>
            </div>

            {/* Manager Card */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-sky-500/30 rounded-xl p-6 relative overflow-hidden shadow-xl flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-sky-500 text-neutral-950 font-bold text-lg flex items-center justify-center shrink-0 shadow-lg font-brand">
                      AM
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-0.5">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>Station Manager</span>
                      </div>
                      <h3 className="text-xl font-bold text-white font-brand">
                        Abdul Malek
                      </h3>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        Operations & Forecourt Lead · 9+ Years Experience
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed bg-neutral-950/70 p-3.5 rounded-lg border border-neutral-800/80 mb-4">
                  Supervises daily forecourt operations, inventory testing, underground tank dip-measurements, daytime 6-nozzle diesel flow and nighttime 4-nozzle operations.
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs">
                <span className="text-neutral-400 font-mono">01713500659</span>
                <a
                  href="tel:01713500659"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-neutral-950 rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Manager Malek</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Grid for All Other Crew Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredEmployees
            .filter((emp) => !(selectedDept === 'All' && ['milton', 'malek'].includes(emp.id)))
            .map((emp) => {
              const isNightShift = emp.shift.includes('Night');

              return (
                <div
                  key={emp.id}
                  className={`bg-neutral-900/60 rounded-xl p-5 flex flex-col justify-between transition-colors border ${
                    emp.isSenior
                      ? 'border-amber-500/40 bg-neutral-900/90 shadow-md'
                      : 'border-neutral-800/80 hover:border-neutral-700'
                  }`}
                >
                  <div>
                    {/* Header with avatar & role */}
                    <div className="flex items-center gap-3 mb-3">
                      {emp.avatar ? (
                        <img
                          src={emp.avatar}
                          alt={emp.name}
                          className={`w-12 h-12 rounded-lg object-cover shrink-0 border border-amber-500/50 shadow ${
                            emp.id === 'khalid' ? 'object-[center_30%]' : 'object-top'
                          }`}
                        />
                      ) : (
                        <div className={`w-10 h-10 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 border font-mono ${
                          emp.isSenior
                            ? 'bg-amber-500 text-neutral-950 border-amber-400'
                            : 'bg-neutral-800 text-neutral-200 border-neutral-700/80'
                        }`}>
                          {getInitials(emp.name)}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-white truncate font-brand">
                            {emp.name}
                          </h4>
                          {emp.isSenior && (
                            <span className="text-[10px] text-amber-400 font-mono bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/30 shrink-0">
                              Senior
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-amber-400/90 font-medium truncate mt-0.5">
                          {getRoleIcon(emp.department)}
                          <span className="truncate">{emp.role}</span>
                        </div>
                      </div>
                    </div>

                    {/* Shift & Experience quiet metadata with day/night indicator */}
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 py-1.5 border-y border-neutral-800/60 mb-2.5">
                      <span className="flex items-center gap-1">
                        {isNightShift ? (
                          <Moon className="w-3 h-3 text-sky-400" />
                        ) : (
                          <Sun className="w-3 h-3 text-amber-400" />
                        )}
                        <span>{emp.shift.split('(')[0].trim()}</span>
                      </span>
                      <span className="text-neutral-500">{emp.experience}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-3">
                      {emp.bio}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-neutral-800/50 flex items-center justify-between text-[11px]">
                    {emp.phone ? (
                      <div className="w-full flex items-center justify-between">
                        <span className="font-mono text-neutral-400">{emp.phone}</span>
                        <a
                          href={`tel:${emp.phone}`}
                          className="px-2.5 py-1 text-[11px] font-semibold bg-neutral-800 hover:bg-neutral-700 text-amber-400 rounded transition-colors flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Call</span>
                        </a>
                      </div>
                    ) : (
                      <>
                        <span className="text-neutral-500">Department</span>
                        <span className="text-neutral-300 font-medium">{emp.department}</span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Forecourt Shift Operations Note */}
        <div className="mt-8 p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Moon className="w-4 h-4 text-sky-400 shrink-0" />
            <span>
              <strong>Night Shift Operations (10:00 PM – 7:00 AM):</strong> Supervised by Senior Nozzlemen <strong>Nazrul vai</strong> & <strong>Kabir vai</strong> with 4 active diesel nozzles and 24/7 octane/petrol service.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Day Shift (7:00 AM – 10:00 PM):</strong> Operated by Ahad, Pranab, Omol Das, Tutul, and Mishkat with all 6 diesel nozzles active.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
