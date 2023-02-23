import { atom } from 'jotai'
import { missionDataProps } from '../services/mock'

const addMission = (
  missions: missionDataProps[],
  mission: missionDataProps
): missionDataProps[] => [...missions, mission]

const removeMission = (
  missions: missionDataProps[],
  missionID: number
): missionDataProps[] => missions.filter(mission => mission.id !== missionID)

const myMissionsAtom = atom<missionDataProps[]>([])
const newMissionAtom = atom<missionDataProps>({} as missionDataProps)
const singleMissionAtom = atom<missionDataProps>({} as missionDataProps)
const addNewMissionAtom = atom(
  () => '',
  (get, set, mission: missionDataProps) => {
    set(myMissionsAtom, addMission(get(myMissionsAtom), mission))
    set(newMissionAtom, {} as missionDataProps)
  }
)
const removeMissionAtom = atom(
  () => '',
  (get, set, id: number) => {
    set(myMissionsAtom, removeMission(get(myMissionsAtom), id))
  }
)

export {
  newMissionAtom,
  myMissionsAtom,
  addNewMissionAtom,
  removeMissionAtom,
  singleMissionAtom
}
