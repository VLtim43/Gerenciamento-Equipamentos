
import * as equipmentData from "../../../data/equipment.json";
import { Equipament } from "../class/Equipment";
import { getPositionsForEquipment } from "./setPosition";

export function createEquipmentArray(): Equipament[] {
  const equipmentArray: Equipament[] = [];

  equipmentData.forEach((eq: any) => {
    const positions = getPositionsForEquipment(eq.id);
    const equipment = new Equipament(eq.id, eq.name, eq.equipmentModelId, positions);
    equipmentArray.push(equipment);
  });

  return equipmentArray;
}
