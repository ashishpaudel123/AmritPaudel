import React from "react";

export function CollabSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-neutral-900 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Let’s Collaborate!</h2>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          Have a project in mind or want to work together? I’m always open to
          new opportunities and creative collaborations. Let’s build something
          amazing!
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary-dark transition mb-10"
        >
          Get in Touch
        </a>
      </div>
      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6">Collaborated With</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Replace these placeholders with actual company logos or names */}
          <div className="w-32 h-16 bg-white dark:bg-neutral-800 rounded shadow flex items-center justify-center text-gray-500 text-lg font-medium">
            Company 1
          </div>
          <div className="w-32 h-16 bg-white dark:bg-neutral-800 rounded shadow flex items-center justify-center text-gray-500 text-lg font-medium">
            Company 2
          </div>
          <div className="w-32 h-16 bg-white dark:bg-neutral-800 rounded shadow flex items-center justify-center text-gray-500 text-lg font-medium">
            Company 3
          </div>
        </div>
      </div>
    </section>
  );
}
