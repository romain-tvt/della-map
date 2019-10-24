import { csvJSON } from './index';

const csvString = `Domaine,Vignoble,Adresse,lon,lat,Site,image
Pierre Amiot & Fils,Bourgogne - Côte de Nuits,27 Grande Rue 21220 Morey-Saint-Denis,4.96401,47.19503,http://www.domainepierreamiot.fr/,
Domaine Bertagna,Bourgogne - Côte de Nuits,16 rue du Vieux-Château 21640 Vougeot,,,http://www.domainebertagna.com,`;

it('should transform csv string into a json object', () => {
  const json = csvJSON(csvString);
  expect(json.length === 2).toBe(true);
  expect(json[0].domaine).toBe('Pierre Amiot & Fils');
  expect(json[1].adresse).toBe('16 rue du Vieux-Château 21640 Vougeot');
});