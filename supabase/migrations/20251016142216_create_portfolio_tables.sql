/*
  # Create Portfolio Database Tables

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project name
      - `description` (text) - Short description
      - `url` (text) - Live demo link
      - `tech` (text[]) - Array of technologies used
      - `image_url` (text) - Project thumbnail image
      - `order` (integer) - Display order
      - `created_at` (timestamptz) - Creation timestamp
    
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Contact name
      - `email` (text) - Contact email
      - `company` (text) - Company name (optional)
      - `project_type` (text) - Type of project
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on both tables
    - Projects: Public read access, no write access (admin only via dashboard)
    - Contact messages: Public insert only, no read access
*/

-- Create portfolio tables
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  url VARCHAR(255),
  tech TEXT[] NOT NULL,
  image_url VARCHAR(255),
  category VARCHAR(50) NOT NULL,
  order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Insert sample projects
INSERT INTO projects (title, description, tech, image_url, category, order, url) VALUES
(
  'Smart Home Automation Hub',
  'Developed a comprehensive home automation system with voice control, mobile app integration, and real-time monitoring. Features include smart lighting, climate control, and security management.',
  ARRAY['IoT', 'React Native', 'Node.js', 'MQTT', 'Arduino', 'WebSockets'],
  'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000',
  'IoT',
  1,
  'https://example.com/smart-home'
),
(
  'Industrial IoT Dashboard',
  'Created an advanced monitoring system for manufacturing facilities. Includes real-time sensor data visualization, predictive maintenance alerts, and automated reporting.',
  ARRAY['React', 'TypeScript', 'Python', 'AWS IoT', 'MongoDB', 'Machine Learning'],
  'https://images.unsplash.com/photo-1586772002130-b0f3739866d1?auto=format&fit=crop&q=80&w=1000',
  'IoT',
  2,
  'https://example.com/industrial-iot'
),
(
  'Restaurant Automation System',
  'Full-stack solution for restaurant management including order processing, inventory tracking, and staff scheduling. Integrated with POS systems and mobile apps.',
  ARRAY['Next.js', 'Node.js', 'PostgreSQL', 'WebSockets', 'Redux', 'REST API'],
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
  'Web',
  3,
  'https://example.com/restaurant'
),
(
  'Smart Agriculture Monitor',
  'IoT-based system for monitoring and automating agricultural processes. Features include soil moisture sensing, automated irrigation, and crop health analysis.',
  ARRAY['IoT', 'Raspberry Pi', 'Python', 'Machine Learning', 'React', 'Node.js'],
  'https://images.unsplash.com/photo-1628444285790-b310f70ea0ff?auto=format&fit=crop&q=80&w=1000',
  'IoT',
  4,
  'https://example.com/smart-agriculture'
),
(
  'School Management Platform',
  'Comprehensive education management system with features for attendance tracking, grade management, and parent communication.',
  ARRAY['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redux', 'REST API'],
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000',
  'Web',
  5,
  'https://example.com/school-management'
),
(
  'Smart Security System',
  'Advanced security solution with facial recognition, motion detection, and real-time alerts. Includes mobile app and web dashboard for remote monitoring.',
  ARRAY['IoT', 'TensorFlow', 'OpenCV', 'React Native', 'Node.js', 'WebRTC'],
  'https://images.unsplash.com/photo-1557597774-9d475d5cd8c9?auto=format&fit=crop&q=80&w=1000',
  'IoT',
  6,
  'https://example.com/smart-security'
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  project_type text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Projects policies: public read access
CREATE POLICY "Anyone can view projects"
  ON projects
  FOR SELECT
  TO anon
  USING (true);

-- Contact messages policies: public insert only
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Insert demo projects
INSERT INTO projects (title, description, url, tech, "order") VALUES
  ('Restaurant Automation System', 'Smart restaurant management web app for order automation and billing.', 'https://restaurantautomation.netlify.app/menu?table=4', ARRAY['React', 'Node.js', 'PostgreSQL'], 1),
  ('Mechanics Finder', 'Nearby mechanic finder with live location and booking system.', 'https://mechanicsfinder.netlify.app', ARRAY['React', 'Firebase', 'Google Maps API'], 2),
  ('School Automation', 'Complete school management platform with student, teacher, and fees modules.', 'https://schoolautomation.netlify.app', ARRAY['React', 'Node.js', 'MySQL'], 3),
  ('JJ Meeting Scheduler', 'Meeting scheduling and task assignment web app for teams.', 'https://jjmeeting.netlify.app', ARRAY['React', 'Firebase'], 4),
  ('Jagan Construction', 'Project tracking system for construction and material management.', 'https://jaganconstruction.netlify.app', ARRAY['React', 'Node.js'], 5),
  ('Asset Management System', 'Smart inventory and asset management dashboard for businesses.', 'https://assetms.netlify.app', ARRAY['React', 'MongoDB'], 6),
  ('JJ Shopping App', 'E-commerce web app with product listings and shopping cart system.', 'https://jjshopping.netlify.app', ARRAY['React', 'Firebase'], 7)
ON CONFLICT DO NOTHING;