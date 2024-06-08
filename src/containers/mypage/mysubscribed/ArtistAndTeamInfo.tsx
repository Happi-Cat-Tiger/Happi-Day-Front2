'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Label from '@/containers/mypage/mygoods/Label';
import Section from '@/containers/mypage/mygoods/Section';
import ArtistProfileCard from '@/components/Dropdowns/Card/ArtistProfileCard';
import ArtistProfileList from '@/components/List/ArtistProfileList';
import { ArtistInfo, TeamInfo } from '@/types/artist';
import {
  postSubscribeTeamService,
  postSubscribeArtistService,
  postCancelSubscriptionTeamService,
  postCancelSubscriptionArtistService,
  deleteTeamService,
  deleteArtistService,
} from '@/hooks/mutations/artist/artistService';
import ArtistProfileImage from '@/components/Image/ArtistProfileImage';
import StyledButton from '@/components/Button/StyledButton';
import SimpleCard from '@/components/Dropdowns/Card/SimpleCard';
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { TbHandClick } from 'react-icons/tb';

interface Props {
  type: string;
  data: ArtistInfo | TeamInfo;
}

const ArtistAndTeamInfo = ({ data, type }: Props) => {
  const route = useRouter();

  //TODO userType 전역에서 가져오기
  const userType = 'admin';
  console.log('zzzzzzzzz');
  const { id, name, description, subscribed, sales, events, teams, artists } = data;

  const profileOrLogoUrl = type == 'artist' ? (data as ArtistInfo).profileUrl : (data as TeamInfo).logoUrl;

  const navigateArtistEditPage = () => route.push(`/admin/artists/edit/${id}`);
  const navigateTeamEditPage = () => route.push(`/admin/teams/edit/${id}`);

  const { mutation: postSubscribeTeam } = postSubscribeTeamService({ teamId: id });
  const { mutation: postSubscribeArtist } = postSubscribeArtistService({ artistId: id });

  const { mutation: postCancelSubscriptionTeam } = postCancelSubscriptionTeamService({ teamId: id });

  const { mutation: postCancelSubscriptionArtist } = postCancelSubscriptionArtistService({ artistId: id });

  const { mutation: deleteTeam } = deleteTeamService({ teamId: id });

  const { mutation: deleteArtist } = deleteArtistService({ artistId: id });

  const handleSubscritionButton = () => {
    if (type == 'artist') {
      postSubscribeArtist.mutate({ artistId: id });
    } else if (type == 'team') {
      postSubscribeTeam.mutate({ teamId: id });
    }
  };

  const handleCancelSubscritionButton = () => {
    if (type == 'artist') {
      postCancelSubscriptionArtist.mutate({ artistId: id });
    } else if (type == 'team') {
      postCancelSubscriptionTeam.mutate({ teamId: id });
    }
  };

  const handleDeleteButton = () => {
    if (type == 'artist') {
      deleteArtist.mutate({ artistId: id });
    } else if (type == 'team') {
      deleteTeam.mutate({ teamId: id });
    }
  };

  const handleEditButton = () => {
    if (type == 'artist') {
      navigateArtistEditPage();
    } else if (type == 'team') {
      navigateTeamEditPage();
    }
  };

  const buttonStyle = 'py-3.5 prose-btn-M rounded-xl flex-none md:my-1 md:px-5 py-3.5 text-white focus:outline-none ';
  return (
    <div className="flex w-full flex-col gap-8">
      <Section>
        <div className="flex flex-col gap-6  md:flex-row md:items-center md:gap-0">
          <div className="prose-body-L flex w-full items-center  gap-10  md:max-w-lg md:gap-0">
            <ArtistProfileImage imageUrl={profileOrLogoUrl} size={'xxl'} imageAlt={name} />
            <div className=" flex grow justify-center">{name}</div>
          </div>
          {userType === 'user' && (
            <>
              {subscribed === false ? (
                <StyledButton
                  icon={<TbHandClick />}
                  label={'구독'}
                  onClick={handleSubscritionButton}
                  className={`${buttonStyle} bg-pink hover:bg-pink2 `}
                />
              ) : (
                <StyledButton
                  icon={<FaHeartCircleCheck />}
                  label={'구독중'}
                  onClick={handleCancelSubscritionButton}
                  className={`${buttonStyle} bg-orange2 hover:bg-orange1`}
                />
              )}
            </>
          )}
          {userType === 'admin' && (
            <div className="flex flex-col gap-2">
              <StyledButton
                label={'수정'}
                onClick={handleEditButton}
                className={`${buttonStyle} bg-green-400 hover:bg-green-500`}
              />
              <StyledButton
                label={'삭제'}
                onClick={handleDeleteButton}
                className={`${buttonStyle} bg-red-400 hover:bg-red-600`}
              />
            </div>
          )}
        </div>
      </Section>
      <Section>{description}</Section>
      <Section>
        <Label>소속 {type == 'artist' ? '팀' : '아티스트'} </Label>
        <ArtistProfileList>
          <div className="h-[500px] overflow-scroll overflow-x-hidden md:h-[340px] md:border md:border-solid">
            <div className="flex flex-wrap">
              {type == 'artist'
                ? teams?.map((data) => {
                    return (
                      <ArtistProfileCard
                        id={id}
                        type={type}
                        imageUrl={data.logoUrl}
                        imageAlt={data.name}
                        size={'m'}
                        title={data.name}
                      />
                    );
                  })
                : artists?.map((data) => {
                    return (
                      <ArtistProfileCard
                        id={id}
                        type={type}
                        imageUrl={data.profileUrl}
                        imageAlt={data.name}
                        size={'m'}
                        title={data.name}
                      />
                    );
                  })}
            </div>
          </div>
        </ArtistProfileList>
      </Section>
      {/** TODO 스크롤 구현 */}
      <Section>
        <Label>관련 굿즈/공구</Label>
        <div className="flex flex-wrap justify-center gap-4 py-4 md:justify-start ">
          {sales.map((item) => (
            <SimpleCard
              key={item.id}
              id={item.id}
              cardType={'sales'}
              title={item.name}
              thumbnailUrl={item.thumbnailUrl}
            />
          ))}
        </div>
      </Section>
      <Section>
        <Label>관련 이벤트</Label>
        <div className="flex flex-wrap justify-center gap-4 py-4 md:justify-start">
          {events.map((item) => (
            <SimpleCard
              key={item.id}
              id={item.id}
              cardType={'events'}
              thumbnailUrl={item.thumbnailUrl}
              title={item.title}
              location={item.location}
              startTime={item.startTime}
              endTime={item.endTime}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ArtistAndTeamInfo;
