import React from 'react'
import { MainHeader } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RankingScrollViewItem } from '../../../components/rankingScrollViewItem'
import { ScrollView } from 'react-native'

export const Ranking = () => {
  return (
    <>
      <SafeAreaView>
        <MainHeader text="Ranking" />
      </SafeAreaView>

      <ScrollView style={{ padding: 8 }}>
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
      </ScrollView>
    </>
  )
}
