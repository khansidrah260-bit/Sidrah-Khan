import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Clock, CheckCircle } from 'lucide-react';
import { VIDEOS, VideoItem } from '../data/articles';

export const WatchTheEditSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSeconds, setPlaybackSeconds] = useState(48);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#141312] text-[#FDFBF7] border-b border-[#2B2927]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#292725]">
          <div>
            <div className="text-xs font-sans tracking-[0.25em] text-[#C49B71] uppercase font-semibold mb-2">
              CINEMATOGRAPHIC DISPATCHES
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              WATCH THE EDIT
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-[#A8A29E] font-sans max-w-md">
            Original documentary mini-features, runway backstages, styling masterclasses, and global style diaries shot on 35mm and digital cinema cameras.
          </p>
        </div>

        {/* Video Player Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Cinematic Video Player (8 cols) */}
          <div className="lg:col-span-8 bg-[#1C1A19] border border-[#2F2C2A] overflow-hidden shadow-2xl">
            {/* Visual Canvas / Player */}
            <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isPlaying ? 'scale-105 filter brightness-95' : 'filter brightness-80'
                }`}
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Center Play Button Overlay */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FDFBF7]/90 text-[#111010] flex items-center justify-center pl-1 shadow-2xl backdrop-blur-sm hover:bg-white hover:text-[#6B1724] transition-colors">
                  {isPlaying ? (
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
                  )}
                </div>
              </button>

              {/* Live Playing Status Pill */}
              {isPlaying && (
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#6B1724] text-white text-[10px] font-sans px-2.5 py-1 uppercase tracking-widest font-semibold rounded-none">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>PLAYING NOW</span>
                </div>
              )}

              {/* Bottom Scrubber & Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                {/* Progress bar */}
                <div className="w-full bg-white/20 h-1 mb-3 cursor-pointer relative group/bar">
                  <div
                    className="bg-[#C49B71] h-1 relative"
                    style={{ width: `${(playbackSeconds / 300) * 100}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-sans text-white/90">
                  <div className="flex items-center gap-3">
                    <button onClick={togglePlay} className="hover:text-[#C49B71] transition-colors">
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button onClick={() => setIsMuted(!isMuted)} className="hover:text-[#C49B71] transition-colors">
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-[11px] text-white/70">
                      00:{playbackSeconds < 10 ? `0${playbackSeconds}` : playbackSeconds} / {activeVideo.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#C49B71] hidden sm:inline">
                      4K Ultra-HD 60FPS
                    </span>
                    <button
                      onClick={() => alert('Cinematic theater mode active')}
                      className="p-1 hover:text-[#C49B71] transition-colors"
                      title="Fullscreen"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Details & Chapter Breakdown */}
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-[#C49B71] uppercase tracking-wider font-sans mb-2">
                <span>{activeVideo.category}</span>
                <span aria-hidden="true">·</span>
                <span>Directed by {activeVideo.author}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3">
                {activeVideo.title}
              </h3>

              <p className="text-sm text-[#A8A29E] font-sans leading-relaxed mb-6">
                {activeVideo.description}
              </p>

              {/* Timestamp Chapters */}
              <div className="border-t border-[#2B2927] pt-4">
                <span className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#78716C] block mb-3 font-semibold">
                  EPISODE CHAPTERS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeVideo.timestampChapters.map((ch, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setPlaybackSeconds((idx + 1) * 35);
                        setIsPlaying(true);
                      }}
                      className="text-left flex items-center justify-between p-2.5 bg-[#23211F] hover:bg-[#2B2826] text-xs font-sans text-[#E7E2DF] border border-[#33302D] transition-colors"
                    >
                      <span className="truncate pr-2">{ch.title}</span>
                      <span className="text-[#C49B71] font-mono shrink-0">{ch.time}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Video Playlist Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-sans tracking-[0.2em] uppercase text-[#78716C] mb-1 font-semibold">
              SERIES PLAYLIST (4 EPISODES)
            </div>

            {VIDEOS.map((vid) => {
              const isSelected = vid.id === activeVideo.id;
              return (
                <div
                  key={vid.id}
                  onClick={() => {
                    setActiveVideo(vid);
                    setIsPlaying(true);
                    setPlaybackSeconds(0);
                  }}
                  className={`p-3.5 border cursor-pointer transition-all flex gap-3 ${
                    isSelected
                      ? 'bg-[#23211F] border-[#C49B71] text-white shadow-md'
                      : 'bg-[#181716] border-[#292725] text-[#A8A29E] hover:border-[#4A4541] hover:text-white'
                  }`}
                >
                  <div className="w-24 aspect-[16/10] bg-black shrink-0 relative overflow-hidden">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 text-[9px] px-1 font-mono text-white">
                      {vid.duration}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-sans text-[#C49B71] tracking-wider truncate mb-1">
                        {vid.category}
                      </div>
                      <h4 className="font-serif text-sm font-normal text-white line-clamp-2 leading-snug">
                        {vid.title}
                      </h4>
                    </div>

                    <div className="text-[10px] text-[#78716C] font-sans flex items-center justify-between mt-2">
                      <span>{vid.author}</span>
                      {isSelected && (
                        <span className="text-[#C49B71] text-[10px] font-medium flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Playing
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Video Production Note */}
            <div className="p-4 bg-[#1B1918] border border-[#292725] text-[11px] text-[#8C847E] font-sans leading-relaxed">
              All episodes are filmed in 4K with natural lighting and unvarnished sound design. New episodes drop every alternate Thursday.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
