import type { HTMLInputTypeAttribute } from 'react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { AppButton, AppInput } from 'components/shared';
import { ClearIcon } from 'components/shared/Icons';
import { DataSetFieldTypeTypeEnum } from 'generated-sources';
import * as S from './DatasetFieldEnumsFormItemStyles';

interface DatasetFieldEnumsFormItemProps {
  itemIndex: number;
  onItemRemove: () => void;
  datasetFieldType: DataSetFieldTypeTypeEnum;
}

const DatasetFieldEnumsFormItem: React.FC<DatasetFieldEnumsFormItemProps> = ({
  itemIndex,
  onItemRemove,
  datasetFieldType,
}) => {
  const { control, getValues } = useFormContext();

  const setTextFieldType = React.useCallback((): HTMLInputTypeAttribute => {
    if (datasetFieldType === DataSetFieldTypeTypeEnum.INTEGER) return 'number';
    return 'text';
  }, [datasetFieldType]);

  const setTextValidationByType = React.useCallback(
    (value: number | string) => {
      if (
        datasetFieldType === DataSetFieldTypeTypeEnum.STRING &&
        typeof value === 'string'
      )
        return !!value.trim();
      return Number.isInteger(Number(value));
    },
    [datasetFieldType]
  );

  return (
    <S.Container container>
      <Controller
        name={`enums.${itemIndex}.name`}
        control={control}
        defaultValue={getValues(`enums.${itemIndex}.name`)}
        rules={{ required: true, validate: setTextValidationByType }}
        render={({ field }) => (
          <S.ValueNameContainer sx={{ mr: 1 }}>
            <AppInput
              {...field}
              placeholder='Name of value'
              name={`enums.${itemIndex}.name`}
              type={setTextFieldType()}
              customEndAdornment={{
                variant: 'clear',
                showAdornment: !!field.value,
                onCLick: () => field.onChange(''),
                icon: <ClearIcon />,
              }}
            />
          </S.ValueNameContainer>
        )}
      />
      <Controller
        name={`enums.${itemIndex}.description`}
        defaultValue={getValues(`enums.${itemIndex}.description`)}
        control={control}
        render={({ field }) => (
          <S.ValueDescriptionContainer sx={{ mr: 1 }}>
            <AppInput
              {...field}
              sx={{ mr: 1 }}
              placeholder='Description'
              name={`enums.${itemIndex}.description`}
              customEndAdornment={{
                variant: 'clear',
                showAdornment: !!field.value,
                onCLick: () => field.onChange(''),
                icon: <ClearIcon />,
              }}
            />
          </S.ValueDescriptionContainer>
        )}
      />
      <AppButton size='small' color='dropdown' onClick={onItemRemove}>
        Delete
      </AppButton>
    </S.Container>
  );
};

export default DatasetFieldEnumsFormItem;
