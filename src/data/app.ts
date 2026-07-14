import type { IconName } from '../components/Icon.astro';

export interface NavItem {
  id: string;
  label: string;
  icon: IconName;
}

export interface Feed {
  id: string;
  title: string;
  total: number;
  active?: boolean;
  fresh?: number;
}

export interface Episode {
  id: string;
  title: string;
  date: string;
  n: number;
  on: boolean;
  synced?: boolean;
  playing?: boolean;
  fresh?: boolean;
  bytes?: boolean;
}

export interface Category {
  title: string;
  count: number;
  star?: boolean;
}

export const nav: NavItem[] = [
  { id: 'connect', label: 'Connexion', icon: 'plug' },
  { id: 'podcasts', label: 'Podcasts', icon: 'podcast' },
  { id: 'sync', label: 'Synchroniser', icon: 'folder-sync' },
];

export const feeds: Feed[] = [
  { id: 'odyssees', title: 'Les Odyssées', total: 8, active: true },
  { id: 'oli', title: 'Une histoire et… Oli', total: 24, fresh: 3 },
  { id: 'bloom', title: 'Bloom — contes du soir', total: 12 },
  { id: 'ptites', title: "Les P'tites Histoires", total: 31 },
  { id: 'encore', title: 'Encore une histoire', total: 17 },
];

export const episodes: Episode[] = [
  { id: 'e112', title: 'Ulysse et le cyclope Polyphème', date: '12/03/2025', n: 112, on: true, synced: true, playing: true },
  { id: 'e111', title: 'Toutânkhamon, le pharaon oublié', date: '05/03/2025', n: 111, on: true, synced: true },
  { id: 'e110', title: "Cléopâtre, la dernière reine d'Égypte", date: '27/02/2025', n: 110, on: true, fresh: true },
  { id: 'e109', title: 'Marco Polo sur la route de la soie', date: '20/02/2025', n: 109, on: false },
  { id: 'e108', title: "Jeanne d'Arc, la bergère devenue cheffe de guerre à seulement dix-sept ans", date: '13/02/2025', n: 108, on: false, bytes: true },
  { id: 'e107', title: 'Léonard de Vinci, le génie de la Renaissance', date: '06/02/2025', n: 107, on: false },
];

export const categories: Category[] = [
  { title: 'Favoris', count: 8, star: true },
  { title: 'Histoires', count: 12 },
  { title: 'Contes du soir', count: 6 },
];

export const changeset = {
  add: ['Ulysse et le cyclope Polyphème', 'Toutânkhamon, le pharaon oublié', "Cléopâtre, la dernière reine d'Égypte"],
  edit: ['La sorcière du placard aux balais'],
  remove: ['Roule galette dans la forêt'],
};

export const host = '192.168.4.1:50000';
