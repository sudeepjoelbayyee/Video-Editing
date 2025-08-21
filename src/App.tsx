import { Play, Film, Camera, Edit2, Mail, Github, Linkedin, Instagram, Award, Monitor, FastForward, Scissors, Youtube, Phone, Lightbulb, Users, Clock, Palette, Brain, Zap, Video, HeartHandshake, Timer, MessageCircle, Music } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-zinc-900 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=2070&q=80"
          alt="Professional Video Editing Setup"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-2xl">Sudeep Joel Bayye</h1>
          <p className="text-2xl text-gray-200 mb-8 drop-shadow-lg">Professional Video Editor</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-zinc-900" id="about">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=800&q=80"
                alt="Video Editor at Work"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-300 leading-relaxed">
                With over 8 years of experience in video editing, I specialize in creating visual narratives that captivate audiences. I independently film and edit videos based on the stories I imagine. I always focus on storytelling through powerful editing techniques.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full inline-flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
                <a href="#works" className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                  <Film className="w-5 h-5" />
                  View Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* After Effects */}
              <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"
                  alt="After Effects"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h4 className="text-center font-semibold">After Effects</h4>
              </div>

              {/* Premiere Pro */}
              <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg"
                  alt="Premiere Pro"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h4 className="text-center font-semibold">Premiere Pro</h4>
              </div>

              {/* Blender */}
              <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-colors">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg"
                  alt="Blender 3D"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h4 className="text-center font-semibold">Blender 3D</h4>
              </div>

              {/* CapCut */}
              <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-colors">
                <img
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-capcut-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-brand-social-media-and-pack-logos-icons-9940812.png?f=webp"
                  alt="CapCut"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h4 className="text-center font-semibold">CapCut</h4>
              </div>

              {/* VN */}
              <div className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-colors">
                <img
                  src="https://img.freepik.com/premium-photo/vn-3d-icon_1078901-15.jpg"
                  alt="VN Editor"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h4 className="text-center font-semibold">VN Editor</h4>
              </div>
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <Video className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-center mb-2">Creative Storytelling</h4>
                <p className="text-gray-400 text-center">I bring stories to life by crafting engaging and seamless edits.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <Camera className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-center mb-2">Cinematography Knowledge</h4>
                <p className="text-gray-400 text-center">I understand how framing, lighting, and camera angles make a scene visually impactful.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <Edit2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-center mb-2">Attention to Detail</h4>
                <p className="text-gray-400 text-center">I focus on the little things that make a big difference in the final video.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <HeartHandshake className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-center mb-2">Communication and Teamwork</h4>
                <p className="text-gray-400 text-center">I collaborate well with others to bring creative ideas to reality.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <Timer className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-center mb-2">Time Management</h4>
                <p className="text-gray-400 text-center">I work efficiently to meet deadlines without compromising quality.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <Music className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-center mb-2">Music & Sound Synchronization</h4>
                <p className="text-gray-400 text-center">I match visuals perfectly with music and sound to enhance the mood and flow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-20 bg-zinc-900" id="works">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">My Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Project 1 - Thor VFX */}
            <div className="group relative overflow-hidden rounded-lg">
              <a href="https://www.instagram.com/reel/DNkyus_T4Ez/">
                <img
                  src="https://varthana.com/school/wp-content/uploads/2024/01/B762-2.jpg"
                  alt="Music Video Project"
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
              </a>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Cinematic Edit</h3>
                  <p className="text-gray-300">I Shot Videos in 4K 60FPS and Made Basic Cuts and according to the Music, Added SFX and did basic colour grading of each clip and finalized the video.</p>
                </div>
              </div>
            </div>


            {/* Project 2 - Thor VFX */}
            <div className="group relative overflow-hidden rounded-lg">
              <a href="https://drive.google.com/file/d/16F40M_hsAp3z7MbSVFjkURtZLEWP2fQl/view?usp=sharing">
                <img
                  src="https://i.pinimg.com/550x/13/19/e7/1319e7922faffbfa43034a816126b97d.jpg"
                  alt="Music Video Project"
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
              </a>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Thor VFX Video</h3>
                  <p className="text-gray-300">I have made this VFX using After Effects sofware by capturing the video with a phone.</p>
                </div>
              </div>
            </div>

            {/* Project 3 - 3D edit */}
            <div className="group relative overflow-hidden rounded-lg">
              <a href="https://drive.google.com/file/d/1yMKVyR1dU_znCJpzkeWBQjAXynrmNRTl/view?usp=sharing">
                <img
                  src="https://i.ytimg.com/vi/ihFBNFeXmCM/maxresdefault.jpg"
                  alt="Documentary Project"
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
              </a>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">3D Blender Edit</h3>
                  <p className="text-gray-300">In this i created the Sword in Blender Software and imported the Character, animated that and made camera movement to get this final output.</p>
                </div>
              </div>
            </div>

            {/* Project 4 - Youtube Channel */}
            <div className="group relative overflow-hidden rounded-lg">
              <a href="https://www.youtube.com/@joelsgospelinspirations">
                <img
                  src="https://i.redd.it/3d-youtube-logo-full-video-on-my-channel-v0-ituve6xk0apa1.png?width=1920&format=png&auto=webp&s=c4b090ae1e20b8d1877e4cdf6fb29fe216ed84ce"
                  alt="Event Coverage"
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
              </a>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Youtube Channel</h3>
                  <p className="text-gray-300">Been Uploading Christian Related content from October 20 and Gained 40k+ subscribers Presently</p>
                </div>
              </div>
            </div>

            {/* Project 5 - Short Film */}
            <div className="group relative overflow-hidden rounded-lg">
              <a href="https://www.instagram.com/reel/DGCxGwGTLEC/?utm_source=ig_web_copy_link">
                <img
                  src="https://i.pinimg.com/736x/d5/f6/b6/d5f6b6826165b924701b3c392ea1ad38.jpg"
                  alt="Short Film"
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
              </a>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Recent Client Video edit</h3>
                  <p className="text-gray-300">An Aesthetic Based Edit for a client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Let's Connect</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Instagram */}
              <a
                href="https://instagram.com/sudeeep.joel"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-purple-600 to-pink-500 p-6 rounded-lg text-center hover:scale-105 transition-transform"
              >
                <Instagram className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Instagram</h3>
                <p className="text-sm opacity-80">@sudeeep.joel</p>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@joelsgospelinspirations"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-lg text-center hover:scale-105 transition-transform"
              >
                <Youtube className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">YouTube</h3>
                <p className="text-sm opacity-80">Joel's Gospel Inspirations</p>
              </a>

              {/* Email */}
              <a
                href="mailto:sudeepjoelbayye1307@gmail.com"
                className="group bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-lg text-center hover:scale-105 transition-transform"
              >
                <Mail className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-sm opacity-80">sudeepjoelbayye1307@gmail.com</p>
              </a>

              {/* Phone */}
              <a
                href="tel:+918074543293"
                className="group bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-lg text-center hover:scale-105 transition-transform"
              >
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-sm opacity-80">+91 8074543293</p>
              </a>
            </div>

            <div className="mt-16 text-center">
              <p className="text-xl text-gray-300 mb-6">Let's create something amazing together!</p>
              <div className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full transition-colors">
                <Mail className="w-5 h-5" />
                <span>Get Started</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-zinc-900 text-center text-gray-400">
        <p>© 2025 Sudeep Joel Bayye. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;