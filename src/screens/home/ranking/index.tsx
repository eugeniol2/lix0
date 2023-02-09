
import React, { useState } from 'react'
import { MainHeader, RankingScrollViewItem } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { TopTabNavigation } from '../../../components/topTabNavigation'


export const Ranking = () => {
  const [isActive, setIsActive] = useState(false)

  const handleLeftButtonClick = () => {
    setIsActive(true)
  }

  const handleRightButtonClick = () => {
    setIsActive(false)
  }

  return (
    <>
      <SafeAreaView>
        <MainHeader text="Ranking" />
        <TopTabNavigation
          leftButtonName="Recife"
          leftButtonClick={handleLeftButtonClick}
          rightButtonName="Meu bairro"
          rightButtonClick={handleRightButtonClick}
          isActive={isActive}
        />
      </SafeAreaView>
      <ScrollView style={{ padding: 8 }}>
        {isActive ? (
          <>
            <RankingScrollViewItem
              city="recife"
              userName="nereu chagas"
              points={1314}
              position={1}
            />
            <RankingScrollViewItem
              city="amazonas"
              userName="jorge paulo"
              points={1314}
              position={2}
            />
            <RankingScrollViewItem
              city="caruaru"
              userName="Lais carla"
              points={1314}
              position={3}
            />
            <RankingScrollViewItem
              city="caruaru"
              userName="Lais carla"
              points={1314}
              position={4}
            />
            <RankingScrollViewItem
              city="caruaru"
              userName="Lais carla"
              points={1314}
              position={5}
            />
            <RankingScrollViewItem
              city="caruaru"
              userName="Lais carla"
              points={1314}
              position={6}
            />
            <RankingScrollViewItem
              city="caruaru"
              userName="Lais carla"
              points={1314}
              position={7}
            />
            <RankingScrollViewItem
              city="caruaru"
              userName="Lais carla"
              points={1314}
              position={1}
            />
            <RankingScrollViewItem
              city="caruaru"
              userName="Lais carla"
              points={1314}
              position={1}
            />
            <RankingScrollViewItem
              city="caruaru"
              userName="Lais carla"
              points={1314}
              position={1}
            />
            <RankingScrollViewItem
              city="caruaru"
              userName="Lais carla"
              points={1314}
              position={1}
            />
            <RankingScrollViewItem
              city="caruaru"
              userName="Lais carla"
              points={1314}
              position={1}
            />
          </>
        ) : (
          <>
            <RankingScrollViewItem
              city="caruaru"
              userName="Lais carla"
              points={1314}
              position={1}
            />
            <RankingScrollViewItem
              city="caruaru"
              userName="Lais carla"
              points={1314}
              position={1}
            />
          </>
        )}

      </ScrollView>
    </>
  )
}
